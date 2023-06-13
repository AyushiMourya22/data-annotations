const mongoose =require("mongoose")

const historicalSchema=new mongoose.Schema({
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

const Historical=mongoose.model("Historical",historicalSchema)
module.exports=Historical