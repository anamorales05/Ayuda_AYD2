import routes from './app.route.js';
import express from 'express';

const app = express()

app.set('port',3000)
const SERVER = 'micro1'

app.use(`/${SERVER}`, routes)

app.listen(app.get('port'), () => {
    console.log("Hola mundo en puerto 3000");
})