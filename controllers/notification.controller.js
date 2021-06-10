const { response, request } = require('express')

const notificationGET = (req = request, res = response) => {

    res.json({
        mensaje: 'Bienvenido a mi nueva API'
    })
}

module.exports = {notificationGET}