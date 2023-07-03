// routes/fruitRoutes.js

const express = require('express');
const router = express.Router();

const fruitController = require('../controllers/FruitController');

// Define the route to handle the API request
router.get('/', fruitController.getSortedFruits);

module.exports = router;
