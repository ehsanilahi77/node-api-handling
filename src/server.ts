// const express = require('express')
import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import {protect} from "./modules/auth";
import {createNewUser, signin} from "./handlers/user";

const app = express()

/*const customLogger = (message) => (req, res, next) => {
    console.log(`Hello from ${message}`)
    next()
}*/

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
/*
app.use(customLogger('customer Logger'))

app.use((req, res, next) =>{
    req.test = 'testing'
    next()
})*/

app.get('/', (req, res)=>{
    console.log('hello from express')
    res.status(200)
    res.json({message : 'hello'})
})

app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('/signin', signin)

// module.exports = app
export default app