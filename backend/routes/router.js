const router = require("express").Router()

// Cifras router
const cifrasRouter = require("./cifras")
router.use("/", cifrasRouter)

module.exports = router;