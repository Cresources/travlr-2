// const express = require('express'); 
// const router = express.Router(); 
// const controller= require('../controllers/travel'); 
 
// /* GET home page. */ 
// router.get('/', controller.travel); 
 
// module.exports = router; 


// const express = require('express');
// const router = express.Router();

// // Import the travel controller
// const travelController = require('../controllers/travel');

// // Define the GET route with the appropriate callback function
// router.get('/', travelController.travel);

// module.exports = router;

const express = require('express');
const router = express.Router();

// GET travel view
router.get('/', (req, res) => {
  res.render('travel', { title: 'Travlr Getaways' });
});

module.exports = router;


