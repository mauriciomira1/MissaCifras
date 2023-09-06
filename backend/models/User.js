const mongoose = require("mongoose")

const { Schema } = mongoose

const { cifraSchema } = require("./Cifra")

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  foto: {
    type: String
  },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User