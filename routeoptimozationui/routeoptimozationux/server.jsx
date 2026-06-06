const express = require("express");
const {default:mongoose}= require("mongoose")
const cors=require("cors");
const mydatabase= require("./modal/db")
const port =13000;

// frontend setup
const app=express();
app.use(express.json());
app.use(cors());
// backend setup
app.get("/" ,(req,res)=>{
    res.send("welcome to the smart waste management system -server side page")
    res.end()
})

app.post("/Contacts",async(req,res)=>{
    
        const {name,email,subject,textarea}=req.body
        const myformdata={name,email,subject,textarea};
        console.log(myformdata);
        try{
            if(!name ||!email ||!subject ||!textarea){
                console.error("data fields are not filled")
            }

            else{
                const contactdata = new mydatabase(myformdata);
                await contactdata.save();
                console.log("contact datas saved successfully");
                return res.status(200).json({messages:"data saved successfully"})
            }
        }
    
    catch(err){
        console.error("backend side error,maybe cannot send data..!",err)
        return res.status(500) .json({error:"server side error ,maybe not getting the datas"})
    }
})
// db setup
mongoose.connect("mongodb://localhost:27017/Routeoptimization")
.then(()=>{
    console.log("database connected successfully...!")
})
.catch((err)=>{
    console.log("database not connected",err)
})


// deploymentsetup
app.listen (port,(err)=>{
    if(err){
        console.log("port no. not working",err)
    }
    else{
        console.log(`port is working successfully ${port}`)
    }
})