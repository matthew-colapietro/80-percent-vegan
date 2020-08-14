const router = require('express').Router()
const { VeganProduct } = require("./models/VeganProductSchema");

//Set up routes
router.post('/VeganProduct/', (req, res, next) => {
  //creating new VeganProduct entry with all parameters from form component
  let veganProduct = new VeganProduct()

  veganProduct.productName = req.body.productName
  veganProduct.avgPrice = req.body.avgPrice
  veganProduct.productCategory = req.body.productCategory
  veganProduct.productDescription = req.body.productDescription
  veganProduct.image = req.body.image


  veganProduct.save((err) => {
    if (err) throw err
  })

  res.send(`Added new VeganProduct by: ${veganProduct.productName}`)
});

module.exports = router