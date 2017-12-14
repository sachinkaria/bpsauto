'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


const ReservationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true

  },
  reservationTime: {
    type: Date,
    required: true
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Reservation', ReservationSchema);