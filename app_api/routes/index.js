const express = require('express');
const router = express.Router();
const ctrlTrips= require('../controllers/trips');

/* GET trips page. */
router.get('/trips', ctrlTrips.tripsList);

router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

module.exports = router;
