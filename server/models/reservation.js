const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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