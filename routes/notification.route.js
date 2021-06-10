const { Router } = require('express')

const { notificationGET } = require('../controllers/notification.controller')

const router = Router()

router.get('/', notificationGET)

module.exports = router;