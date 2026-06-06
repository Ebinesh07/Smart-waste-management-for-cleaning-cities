const mongoose = require ("mongoose");
const mydatabase= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },email:{
        type:String,
        required:true

    },subject:{
        type:String,
        required:true
    },textarea:{
        type:String,
        required:true
    }

},{
        collection:"R-contacts"
    })
    module.exports=mongoose.model("R-contacts",mydatabase,"R-contacts");
