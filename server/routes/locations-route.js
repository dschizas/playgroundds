const express = require('express')

const locationsRouter = require('./../controllers/locations-controller');

const router = express.Router()

router.get('/all', locationsRouter.locationsAll)

router.get('/locations', locationsRouter.queryLocation)

module.exports = router
