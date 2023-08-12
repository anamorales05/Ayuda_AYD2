import app from './app.js'

app.listen(app.get('port'), () => {
    console.log('Hola mundo en el puerto: ' +app.get('port'))
})