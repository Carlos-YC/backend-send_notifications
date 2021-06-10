const express = require('express')
const cors = require('cors')

const admin = require('firebase-admin');

var serviceAccount = require('../supermarket-ticket-firebase-adminsdk-aqxgz-3d3d6ed693.json');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.notificationPath = '/api/notification'

        this.middlewares();
        this.routes();

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://supermarket-ticket-default-rtdb.europe-west1.firebasedatabase.app"
        })

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'))

    }

    routes(){
        this.app.use(this.notificationPath, require('../routes/notification.route'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server runing in port ', this.port);
        })
    }

}


module.exports = Server;