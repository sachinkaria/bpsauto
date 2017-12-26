const _ = require('lodash');
const moment = require('moment');
const Reservation = require('../models/reservation');

const SLOTS = ['08:30', '09:15', '10:00', '10:45', '11:30', '12:15', '13:00', '13:45', '14:30', '15:15', '16:00', '16:45'];


module.exports.create = create;
module.exports.list = list;
module.exports.getAvailableTimes = getAvailableTimes;

function create(req, res) {
  console.log('Creating Reservation');
  const reservation = new Reservation(req.body);
  reservation.save((err) => {
    if (err) return err;
    return res.jsonp(reservation);
  });
}

function list(req, res) {
  const DATE_START = moment(req.params.date, 'DD-MM-YYYY').startOf('day');
  const DATE_END = moment(DATE_START).add(1, 'days');
  Reservation.find({
    reservationTime: {
      $gte: DATE_START,
      $lt: DATE_END
    }
  }, (err, reservations) => {
    if (err) return (err);
    return res.jsonp(reservations);
  });
}

function getAvailableTimes(req, res) {
  let i = 0;
  let availableSlots = [];

  SLOTS.forEach((slot) => {
    const MAX_BOOKINGS_PER_SLOT = 4;
    const SLOT_MOMENT = moment(req.params.date, 'DD-MM-YYYY').format('DD-MM-YYYY').concat(' ').concat(slot);
    const SLOT = moment.utc(SLOT_MOMENT, 'DD-MM-YYYY HH:mm');
    Reservation.find({reservationTime: SLOT}, (err, reservations) => {
      if (err) return (err);
      if (reservations.length < MAX_BOOKINGS_PER_SLOT) {
        availableSlots = availableSlots.concat(slot);
      }

      i += 1;

      if (i >= SLOTS.length) {
        return res.jsonp(availableSlots.sort());
      }
    });
  });
}
