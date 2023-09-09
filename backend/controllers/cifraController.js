const { Cifra: CifraModel } = require("../models/Cifra")

const cifraController = {
  create: async (req, res) => {
    try {
      const cifra = {
        musica: req.body.musica,
        versao: req.body.versao,
        cantor: req.body.cantor,
        compositor: req.body.compositor,
        tom: req.body.tom,
        bpm: req.body.bpm,
        video: req.body.video,
        letra: req.body.letra,
        cifra: req.body.cifra,
        hashtags: req.body.hashtags,
        momentoDaMissa: req.body.momentoDaMissa,
        liturgica: req.body.liturgica,
        chordsList: req.body.chordsList
      }

      const response = await CifraModel.create(cifra)
      res.status(201).json({ response, msg: "Cifra criada com sucesso!" })

    } catch (error) {
      console.log(error)
      console.error("Erro no controller")
    }
  },
  getAll: async (req, res) => {
    try {
      const cifras = await CifraModel.find()
      res.status(200).json(cifras)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = cifraController;