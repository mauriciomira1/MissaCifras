const mongoose = require("mongoose")

const { Schema } = mongoose

/* const { cifraSchema } = require("./Cifra")
 */const { playlistSchema } = require("./Playlist")

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  foto: {
    type: String
  },
  playlists: {
    type: [playlistSchema]
  },
  /*   colaboracoes: {
      type: [cifraSchema]
    } */
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = {
  User,
  userSchema,
}