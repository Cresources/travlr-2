const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication');
const ctrlTrips= require('../controllers/trips');
const tripsController = require('../controllers/trips');
const { route } = require('../../app');
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['RS256']
});

// auth endpoints
router.route('/login')
    .post(authController.login);

router.route('/register')
    .post(authController.register);

/* GET trips page. */
router.route('/trips')
    .get(ctrlTrips.tripsList)
    .post(auth, tripsController.tripsAddTrip)
    

router.route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;
