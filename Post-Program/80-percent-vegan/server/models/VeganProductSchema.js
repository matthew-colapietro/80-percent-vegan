const mongoose = require('mongoose')
const Schema = mongoose.Schema

//This is the main VeganProduct schema
const VeganProductSchema = new Schema({
  productName: String,
  avgPrice: Number,
  productCategory: String,
  productDescription: String,

})

module.exports.VeganProduct = mongoose.model('VeganProduct', VeganProductSchema)