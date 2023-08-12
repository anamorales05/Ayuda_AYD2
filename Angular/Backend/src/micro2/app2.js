import routes from './app2.route.js';
import express from 'express';
import cors from "cors"

const app = express()
app.use(cors());

app.set('port', 5000)
const SERVER = 'micro2'

app.use(`/${SERVER}`, routes)


app.listen(app.get('port'), () => {
    console.log("Hola mundo en puerto 5000");
})