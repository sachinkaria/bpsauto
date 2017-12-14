 _ = require('lodash');
const Reservation = require('../models/reservation');

module.exports.create = create;

function create(req, res) {
  console.log('Creating Reservation');
  console.log(req.body);
  const reservation = new Reservation(req.body);
  reservation.save((err) => {
    if (err) return err;
    return res.jsonp(reservation);
  });
}