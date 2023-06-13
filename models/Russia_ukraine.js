const mongoose =require("mongoose")

const russia_ukraineSchema=new mongoose.Schema({
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

const RussiaUkraine=mongoose.model("RussiaUkraine",russia_ukraineSchema)
module.exports=RussiaUkraine