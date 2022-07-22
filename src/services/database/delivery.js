const mongoose = require('mongoose')

const deliverySchema = mongoose.Schema({
    user:{
        Name:String,
        email:String,
        password:String
    },
    products:{
        name:String,
        type:String,
        value:Number,
    },
    delivery:{
        
    }

})