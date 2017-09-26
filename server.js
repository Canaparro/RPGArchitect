'use strict'
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

const port = process.env.AVI_PORT || 3001

app.listen(port, () => {
    console.log('API server online')
})
