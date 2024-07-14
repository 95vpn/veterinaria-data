const express = require('express');
const petRouter = require('./pet.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/pet', petRouter)

module.exports = router;