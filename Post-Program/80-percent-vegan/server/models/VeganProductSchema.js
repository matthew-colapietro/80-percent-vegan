const mongoose = require('mongoose')
const Schema = mongoose.Schema

//This is the main VeganProduct schema
const VeganProductSchema = new Schema({
  reporterName: String,
  phoneNumber: Number,
  email: String,
  trashImage: String,
  trashQuantity: String,
  hazardnessLevel: String,
  longitude: Number,
  latitude: Number,
  submissionDate: Date,
  status: String
})

module.exports.VeganProduct = mongoose.model('VeganProduct', VeganProductSchema)