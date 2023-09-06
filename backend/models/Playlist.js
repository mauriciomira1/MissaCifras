const mongoose = require("mongoose")

const { Schema } = mongoose;

const { cifraSchema } = require("./Cifra")
const { userSchema } = require("./User")

const playlistSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  musicas: {
    type: [cifraSchema],
    required: true
  }
}, { timestamps: true })