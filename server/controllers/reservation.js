const _ = require('lodash');
const moment = require('moment');
const Reservation = require('../models/reservation');

const SLOTS = ['17:00', '18:00'];


module.exports.create = create;
module.exports.getAvailableTimes = getAvailableTimes;

function create(req, res) {
  console.log('Creating Reservation');
  const reservation = new Reservation(req.body);
  reservation.save((err) => {
    if (err) return err;
    return res.jsonp(reservation);
  });
}

function getAvailableTimes(req, res) {
  let i = 0;

  SLOTS.forEach((slot) => {
    const AVAILABLE_SLOTS = [];
    const MAX_BOOKINGS_PER_SLOT = 4;
    const SLOT_MOMENT = moment(req.params.date, 'DD-MM-YYYY').format('DD-MM-YYYY').concat(' ').concat(slot);
    const SLOT = moment(SLOT_MOMENT, 'DD-MM-YYYY HH:mm');
    Reservation.find({ reservationTime: SLOT }, (err, reservations) => {
      if (err) return (err);
      if (reservations.length < MAX_BOOKINGS_PER_SLOT) {
        AVAILABLE_SLOTS.push(slot);
      }

      i += 1;

      if (i >= SLOTS.length) {
        return res.jsonp(AVAILABLE_SLOTS);
      }
    });
  });
}
