const router = require('express').Router();
const {Dog, Temperament} = require('../db.js')
const { Op } = require("sequelize");
const axios = require('axios')
const {API} = process.env

router.get('/', async function(req, res){
  if (req.query.name){
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${req.query.name}&api_key=${API}`)

    const dogsApi = response.data.map(d => ({id: d.id,
                                            name: d.name,
                                            image: `https://cdn2.thedogapi.com/images/${d.reference_image_id}.jpg`,
                                            weight: d.weight.metric,
                                            temperament: d.temperament}))

    const dogsDB = await Dog.findAll({
      where:{
        name:{
          [Op.iLike]: `%${req.query.name}%`
        }
      },
      attributes: {exclude: ['height', 'life_span']},
      include:[Temperament]})

    const filtered = dogsDB.map(d => {
      const temp = d.Temperaments.reduce((str, t, ind) => ind !== d.Temperaments.length - 1 ? str + t.name + ", " : str + t.name, ""); //creando string de Temperaments
      const {Temperaments, ...dest} = {...d.dataValues, temperament: temp} //destructuring para sacar Temperaments
      return dest;
    })

    const dogs = [...dogsApi, ...filtered]
    res.send(dogs.length ? dogs : {res: "No se econtraron resultados"})

  } else{
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API}`)
    const dogsApi = response.data.map(d => ({id: d.id,
                                            name: d.name,
                                            image: d.image.url,
                                            weight: d.weight.metric,
                                            temperament: d.temperament}))

    const dogsDB = await Dog.findAll({
      include:[Temperament],
      attributes: {
        exclude: ['height', 'life_span']}})

    const filtered = dogsDB.map(d => {
      const temp = d.Temperaments.reduce((str, t, ind) => ind !== d.Temperaments.length - 1 ? str + t.name + ", " : str + t.name, ""); //creando string de Temperaments

      const {Temperaments, ...dest} = {...d.dataValues, temperament: temp} //destructuring para sacar Temperaments
      return dest;
    })

    const dogs = [...dogsApi, ...filtered]
    res.send(dogs)
  }
})

router.get('/:id/', async function (req, res) {
  const id = req.params.id;
  if (id.length > 4){
    try{
      const dogDB = await Dog.findOne({
        where:{
          id: id},
          include:[Temperament]});

      const temp = dogDB.Temperaments.reduce((str, t, ind) => ind !== dogDB.Temperaments.length - 1 ? str + t.name + ", " : str + t.name, ""); //creando string de Temperaments

      const {Temperaments, ...dest} = {...dogDB.dataValues, temperament: temp} //destructuring para sacar Temperaments
      res.send(dest);
    } catch (e) {
      res.send("El ID no existe")
    }

  } else{
    try{
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API}`);
    const dogApi = response.data.find(d => d.id === parseInt(id));
    
    const dogApiFiltered = {image: dogApi.image.url,
                            name: dogApi.name,
                            temperament: dogApi.temperament,
                            weight: dogApi.weight.metric,
                            height: dogApi.height.metric,
                            life_span: dogApi.life_span,
                            id: dogApi.id}

    res.send(dogApiFiltered)
    } catch (e) {
      res.send("El ID no existe")
    }
  }
})

module.exports = router;