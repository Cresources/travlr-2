const express = require('express');
const router = express.Router();
const ctrlTrips= require('../controllers/trips');
const tripsController = require('../controllers/trips')

/* GET trips page. */
router.route('/trips')
    .get(ctrlTrips.tripsList)
    .post(tripsController.tripsAddTrip)
    

router.route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
