const mongoose = require("mongoose")

async function main() {
  try {
    await mongoose.connect("mongodb+srv://mauriciomirandagomes:hxqePea1K4BTHxAE@cluster0.d4qunid.mongodb.net/?retryWrites=true&w=majority")
    console.log("Conectado ao banco de dados.")
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

module.exports = main;