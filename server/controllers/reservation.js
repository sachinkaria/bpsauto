'use strict';

/**
 * Module dependencies.
 */
const _ = require('lodash');
const mongoose = require('mongoose');

const Reservation = mongoose.model('Reservation');

module.exports.create = create;

function create(req, res) {
  const reservation = new Reservation(req.body);
  reservation.save((err) => {
    if (err) return err;
    return res.jsonp(reservation);
  });
}