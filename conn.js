const mongoose=require("mongoose")

mongoose.connect(process.env.MONGOURL).then(()=>console.log("Connection established")).catch((e)=>console.log(e))