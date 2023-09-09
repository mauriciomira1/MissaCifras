const mongoose = require("mongoose")

const { Schema } = mongoose;

const { cifraSchema } = require("../models/Cifra")

const cantorSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  qtdDeCliques: {
    type: Number,
    required: true
  },
  capa: {
    type: String
  },
  cifras: {
    type: [cifraSchema]
  }
}, { timestamps: true })

const Cantor = mongoose.model("Cantor", cantorSchema)

module.exports = { Cantor };