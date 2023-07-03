// controllers/FruitController.js

const Fruit = require('../models/Fruit');

// Mock data for fruits
const fruits = [
  new Fruit(1, 'Apple', 'Red'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Orange', 'Orange'),
  new Fruit(4, 'Grape', 'Purple'),
  new Fruit(5, 'Lemon', 'Yellow'),
];

// Controller method to handle the API request
function getSortedFruits(req, res) {
  // Sort the fruits based on color
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
}



module.exports = { getSortedFruits };
