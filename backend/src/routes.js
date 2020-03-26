const express = require('express');
const router = express.Router();

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

// Ongs
router.get('/ongs', OngsController.index);
router.post('/ongs', OngsController.store);

// Incidents
router.get('/incidents', IncidentController.index);
router.post('/incidents', IncidentController.store);
router.delete('/incidents/:id', IncidentController.destroy);

// Profile
router.get('/profile', ProfileController.index);

// Session - Login
router.post('/sessions', SessionController.store)

module.exports = router;