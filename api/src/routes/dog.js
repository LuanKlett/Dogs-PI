const router = require('express').Router();
const {Dog, Temperament} = require('../db.js')

router.post('/', async function(req, res){
  const {name, height, weight, life_span, temperaments, image} = req.body;
  const dog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image
  })
  temperaments.forEach(async t => { dog.addTemperament(await Temperament.findByPk(t))})
  res.send(dog)
})

module.exports = router;