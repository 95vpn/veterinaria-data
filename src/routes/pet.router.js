const { getAll } = require('../controllers/pet.controllers');
const express = require('express');

const petRouter = express.Router();

petRouter.route("/")
		.get(getAll)

module.exports = petRouter;