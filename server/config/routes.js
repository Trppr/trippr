const jwt = require('jsonwebtoken');
const tripController = require('../trips/tripController');
const userController = require('../users/userController');

module.exports = (app, express) => {

  /*
  *  User API Requests
  */

  app.post('/signup', userController.createUser);
  // Takes the following(description not required):
  // req.body.email,
  // req.body.password,
  // req.body.firstName,
  // req.body.lastName,
  // req.body.description
  // Succes -> 201
  // Failure -> 500 w/erors on error.

  app.post('/login', userController.authenticateUser);
  // Takes the following:
  // req.body.email,
  // req.body.password
  // Success -> Will return json object with user object and token
  // Failure -> 500

  /*
  *  Trip API Requests
  */

  app.get('/searchTrips', tripController.searchTrips);
  // Trip search performed via get request, all params are
  // optional. If all params are blank, all trips will be
  // returned. This request takes the following query params:
  // startDate & endDate: Date format MM/DD, MM/DD/YYYY
  // startLocation & endLocation: Can be city name or state
  // numSeats & seatPrice: Must be integers.
  // Note: Check tripController.js for more details. Example:
  // searchTrips?startLocation=los+angeles&startDate=9/15&numSeats=2

  app.post('/createTrip', tripController.createTrip);
  // Needs ALL the trip model attributes, refer to tripController.js or schema
  // Note: The driverId field has to be a valid user id.

  app.post('/reserveSeat', tripController.reserveSeat);
  // Needs trip id & passenger id -> req.body.tripId, req.body.passengerId
  // Note: These id's are foreign keys so they have to exist in the db
  // for this to work.

  app.get('*', (req, res) => {
    res.status(404);
  });

};
