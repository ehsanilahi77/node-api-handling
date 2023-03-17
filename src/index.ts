import * as dotenv from 'dotenv'
dotenv.config()

// const app = require('./server')
import app from './server'

app.listen(3001, ()=> {
    console.log('http://localhost:3001')
})