'use strict'
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userModel = require('./models/user')

const app = express()
const router = express.Router()

const port = process.env.AVI_PORT || 3001

const dbURL = 'mongodb://rpguser:rpguser@ds147864.mlab.com:47864/masterdb'

mongoose.connect(dbURL, { useMongoClient: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

router.get('/', (req, res) => {
    res.json({message: 'API initialized'})
})

router.post('/login', (req, res) => {
    req.body
})

app.use('/api', router)

app.listen(port, () => {
    console.log('API server online on port: ' + port)
})
