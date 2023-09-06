const mongoose = require("mongoose")

const { Schema } = mongoose;

const { artistaSchema } = require("./Artista")
const { userSchema } = require("./User")

const cifraSchema = new Schema({
  musica: {
    type: String,
    required: true
  },
  versao: {
    type: String,
    required: true
  },
  cantor: {
    type: [artistaSchema],
    required: true
  },
  compositor: {
    type: String,
  },
  tom: {
    type: String,
    required: true
  },
  bpm: {
    type: Number
  },
  video: {
    type: String,
  },
  cifra: {
    type: String,
    required: true
  },
  hashtags: {
    type: [String]
  },
  momentoDaMissa: {
    type: String,
    required: true
  },
  qtdDeCliques: {
    type: Number
  },
  chordsList: {
    type: [String]
  },
  userWhoSent: {
    type: userSchema,
    required: true
  }
}, { timestamps: true })

const Cifra = mongoose.model("Cifra", cifraSchema)

module.exports = Cifra