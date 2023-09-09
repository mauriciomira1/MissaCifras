const mongoose = require("mongoose")

const { Schema } = mongoose;

const { cifraSchema } = require("./Cifra")
/* const { userSchema } = require("./User") */
const playlistSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  musicas: {
    type: [[cifraSchema]],
    required: true
  },
  /*   criadoPor: {
      type: [userSchema],
      required: true
    } */
}, { timestamps: true })

const Playlist = mongoose.model("Playlist", playlistSchema)

module.exports = {
  Playlist,
  playlistSchema,
}