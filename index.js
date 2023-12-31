const User=require("./models/User")
const Data=require("./models/Data")
const Celebrity=require("./models/Celebrity")
const Farmer=require("./models/Farmer")
const Hinduphobia=require("./models/Hinduphobia")
const Historical=require("./models/Historical")
const Islamophobia=require("./models/Islamophobia")
const Ozil=require("./models/Ozil")
const RussiaUkraine=require("./models/Russia_ukraine")
const TempleMosque=require("./models/TempleMosque")


const express=require("express")
const app=express()
const path=require("path")
require("dotenv").config()
const mongoose=require("mongoose")

const bcrypt=require("bcryptjs")
const cors=require("cors")

app.use(cors())
app.use(express.json())
const PORT=process.env.PORT ||5000
// require('./conn')

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGOURL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

app.get("/test",(req,res)=>{
    res.send("Okayy")
})

app.post("/register",async (req,res)=>{
    try{
        const {name,email,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const securePassword=await bcrypt.hash(password,salt)
        const user=await User.create({
            name,email,password:securePassword
        })
        return res.status(200).send(user)
    }catch(e){
        return res.status(422).send(e)
    }
})


app.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(user){
            const passCheck=await bcrypt.compare(password,user.password)
            if(passCheck){
            return     res.status(200).send(user)
            }else{
            return    res.status(422).json("Invalid Credentials")
                
            }
        }else{
            return    res.status(400).json("Invalid Credentials")

        }
    }catch(e){
        res.status(422).send(e)
    }
})

app.get("/topics",async(req,res)=>{
    try{
        const data=await Data.find({})
        
        const celebrityData=await Celebrity.find({})
        const farmerData=await Farmer.find({})
        const hinduphobiaData=await Hinduphobia.find({})
        const historicalData=await Historical.find({})
        
        const islamophobiaData=await Islamophobia.find({})
        const ozilData=await Ozil.find({})
        const russiaUkraineData=await RussiaUkraine.find({})
        const templeData=await TempleMosque.find({})
        res.send({data,celebrityData,farmerData,hinduphobiaData,historicalData,islamophobiaData,ozilData,russiaUkraineData,templeData})
    }catch(E){
        res.status(400).send(E)
    }

    
})

app.post("/topics/:id",async(req,res)=>{
    // console.log(req.params['id'])
    const {formData}=req.body
    console.log(formData)
    try{

        Object.keys(formData).forEach(async function(key, index) {
            const e=await Data.findOne({tweet_id:key})
            if(e){
                await Data.updateOne({tweet_id:key},{$set:{
                    value:formData[key]
                }})
            }else{

                const entry=await Data.create({
                    tweet_id:key,value:formData[key]
                })
            }
        });
        return res.send("Okayyy")
    }catch(e){
        res.status(400).send("Error")
    }
})


// app.use(express.static(path.join(__dirname,"./client/build")))

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})