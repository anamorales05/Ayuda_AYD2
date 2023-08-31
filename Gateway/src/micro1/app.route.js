import express from "express";
const router = express()
import Routes from './main.js'

router.get('/hola',Routes.hola)

export default router