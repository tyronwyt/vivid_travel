var express = require('express');
var router = express.Router();

var moment = require('moment');

// get temp data for user
var data = require('../public/javascripts/data.js')

/* GET users listing. */
router.get('/:bookingId', function(req, res, next) {
    let bookingId = req.params.bookingId;
    for (let i = 0; i < data.users[0].packages.length; i++ ) {
        if ( data.users[0].packages[i].booking_id === bookingId) {
            res.render('itinerary', { data: data.users[0].packages[i], moment: moment} );
        }
    }
});

module.exports = router;
