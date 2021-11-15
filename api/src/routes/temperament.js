const router = require('express').Router();
const {Temperament} = require('../db.js')

router.get('/', async function(req, res){
  const temperaments = await Temperament.findAll()
  res.send(temperaments)
})

module.exports = router;