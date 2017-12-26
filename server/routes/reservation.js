const ReservationController = require('../controllers/reservation');
const express = require('express');

module.exports = function (app) {
  // Create route
  app.post('/api/reservations', ReservationController.create);
  app.get('/api/reservations/:date', ReservationController.list);
  app.get('/api/reservations/:date/slots', ReservationController.getAvailableTimes);
};
