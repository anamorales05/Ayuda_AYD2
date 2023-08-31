import routes from './app.route.js';
import express from 'express';

const app = express()

app.set('port',4000)
const SERVER = 'micro2'

app.use(`/${SERVER}`, routes)

app.listen(app.get('port'), () => {
    console.log("Hola mundo en puerto 4000");
})