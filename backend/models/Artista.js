const mongoose = require("mongoose")

const { Schema } = mongoose;
const { cifraSchema } = require("./Cifra")

const artistaSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  qtdDeCliques: {
    type: Number,
    required: true
  },
  capa: {
    type: String,
  },
  cifras: {
    type: [cifraSchema]
  }
}, { timestamps: true })

const Artista = mongoose.model("Artista", artistaSchema)

module.exports = Artista;