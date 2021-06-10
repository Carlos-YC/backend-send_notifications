const { Router } = require('express')

const { notificationGET, sendNotification } = require('../controllers/notification.controller')

const router = Router()

router.get('/', notificationGET)
router.post('/send', sendNotification)

module.exports = router;