import routes from './app.route.js';
import express from 'express';

const app = express()

app.set('port',3000)
const SERVER = 'micro1'
//http://localhost:3000/micro1/endpoint1
//http://localhost:3000/micro1/endpoint2

app.use(`/${SERVER}`, routes)

app.listen(app.get('port'), () => {
    console.log("Hola mundo en puerto 3000");
})