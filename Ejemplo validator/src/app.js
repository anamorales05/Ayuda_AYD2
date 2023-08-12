import express from "express"
const app = express()
import bodyParser from "body-parser"
import validator from "../validator/validacion.js"

app.set('port',4000)

const parser = bodyParser.json()

app.get('/hola', (req,res) => {
    res.send('adios')
})

app.post('/publicacion', parser,validator,(req,res) => {
    //console.log(req.body)
    res.json('Se realizó la publicacion correctamente :)')
})

export default app