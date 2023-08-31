import app from './main.js'

app.listen(app.get('port'), () => {
    console.log('Hola mundo')
})