require('dotenv').config()

const express = require('express')
const cors = require('cors')

const apiRoute = require('./routes/')
const app = express()

app.use(
    cors({
      credentials: false,
      origin: ['*']
    })
)

app.use('/api/dias_festivos', apiRoute)
module.exports = app