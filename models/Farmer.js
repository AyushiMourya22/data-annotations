const mongoose =require("mongoose")

const farmerSchema=new mongoose.Schema({
    tweet_id:{
        type:String,
        required:true,
    },
    tweet:{
        type:String,
        required:true,
    },
    comments:{
        type:Array
    }
})

const Farmer=mongoose.model("Farmer",farmerSchema)
module.exports=Farmer