const mongoose = require('mongoose')


const usermodel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
    },
},{ timestamps:true}
);


const user = mongoose.model('user' , usermodel)
module.exports = user;