import * as dotenv from 'dotenv'
dotenv.config()
import config from "./config";
// const app = require('./server')
import app from './server'

app.listen(config.port, ()=> {
    console.log(`http://localhost:${config.port}`)
})