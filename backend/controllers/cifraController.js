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

  get: async (req, res) => {
    try {
      const cifras = await CifraModel.findById(req.params.id)
      if (!cifras) {
        res.status(404).json({ msg: "Perdão! A cifra não foi encontrada." })
        return;
      }
      res.status(200).json(cifras)
    } catch (error) {
      console.log(error)
    }
  },

  // Apagando uma cifra a partir de um ID da URL
  delete: async (req, res) => {
    try {
      const cifra = await CifraModel.findById(req.params.id)
      if (!cifra) {
        res.status(404).json({ msg: "Perdão! A cifra não foi encontrada." })
        return;
      }
      const deleteCifra = await CifraModel.findByIdAndDelete(req.params.id)
      res.status(200).json({ deleteCifra, msg: "A cifra foi excluída." })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
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
      const updatedCifra = await CifraModel.findByIdAndUpdate(cifra)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = cifraController;