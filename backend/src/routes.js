const express = require('express');
const router = express.Router();

// Validação
const { celebrate, Segments, Joi } = require('celebrate');

const OngsController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

// Session - Login
router.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
}),SessionController.store)

// Ongs
router.get('/ongs', OngsController.index);

router.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().length(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), OngsController.store);

// Incidents
router.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}),IncidentController.index);

router.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required().min(1),
    }),
}),IncidentController.store);

router.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required().min(1),
    }),
}),IncidentController.destroy);

// Profile
router.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

module.exports = router;