const ReservationController = require('../controllers/reservation');
const express = require('express');

module.exports = function (app) {
  // Create route
  app.post('/api/reservations', ReservationController.create);
};
