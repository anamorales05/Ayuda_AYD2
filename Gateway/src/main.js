import express from "express"
const app = express()
import validator from "../validator.js"
import bodyParser from "body-parser"

app.set('port',3000)

var publiJson = bodyParser.json()

app.get('/hola', (req,res) => {
    res.send('adios')
})

app.post('/publicacion' ,publiJson,validator,(req,res) => {
    res.json('Se realizó la publicacion correctamente :)')
})

export default app