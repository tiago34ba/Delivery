const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://tiago39ba:BKAujFAFNDPbNlOF@clusteapp.nxuwa.mongodb.net/delivery?retryWrites=true&w=majority',
    {userCreateIndex:true, userNewUrlParser:true })

module.express = app