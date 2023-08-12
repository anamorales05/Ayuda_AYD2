import express from "express";
const router = express()
import Routes from './main2.js'

router.get('/pizza',Routes.pizza)
router.get('/princesas',Routes.princesas)

export default router