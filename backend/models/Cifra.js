const mongoose = require("mongoose")

const { Schema } = mongoose;

const acordeSchema = new Schema({
  acorde: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

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
    type: String,
    required: true
  },
  compositor: {
    type: String
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
  letra: {
    type: String,
    required: true
  },
  cifra: {
    chordsList: {
      type: [acordeSchema],
      required: true
    },
    letra: {
      type: String,
      required: true
    }
  },
  hashtags: {
    type: [String],
  },
  momentoDaMissa: {
    type: String,
    required: true
  },
  liturgica: {
    type: Boolean
  },
  qtdDeCliques: {
    type: Number
  },
  chordsList: {
    type: [String]
  },
  usuarioQueEnviou: {
    type: String,
  }
}, { timestamps: true })

const Cifra = mongoose.model("Cifra", cifraSchema)

module.exports = {
  Cifra,
  cifraSchema
}