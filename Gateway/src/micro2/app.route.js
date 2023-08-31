import express from "express";
const router = express()
import Routes from './main.js'

router.get('/pizza',Routes.pizza)

export default router