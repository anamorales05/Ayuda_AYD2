import request from "supertest";
import app from '../src/app.js'

var aux = {
    "id":1,
    "nombre":"Ana",
    "edad":50,
    "pass": "hola"
}

// describe('Prueba 1 tipo GET', () => {
//     test('Prueba de endpoint ruta /hola', async () => {
//         const respuesta = await request(app).get('/hola').send()
//         expect(respuesta.statusCode).toBe(200);
//     })
// });

describe('Prueba 2 tipo POST',() => {
    test('Prueba de endpoint ruta /publicacion', async () => {
        const respuesta= await request(app).post('/publicacion').send(aux)
        //console.log(respuesta)
    })
});