const { response, request } = require('express')

const admin = require("firebase-admin");

const notificationGET = (req = request, res = response) => {

    res.json({
        mensaje: 'Bienvenido a mi nueva API'
    })
}

const sendNotification = async (req = request, res = response) => {
    const { token, body, title } = req.body;

    if (token && body && title) {

        const respuesta = await admin.messaging().sendToDevice(token, {
            notification: {
                title,
                body,
                color: '#FF0000'
            },
        });
        if (respuesta.successCount !== 0) {
            res.json(200, {
                status:true,
                msg: 'Notificacion enviada 😊'
            })

        } else {
            res.json(400, {
                status: false,
                msg: 'Error al enviar notificacion'
            })
        }


    } else {
        res.json(400, {
            status: false,
            msg: 'Faltan datos en la solicitud'
        })
    }

}

module.exports = { notificationGET, sendNotification }