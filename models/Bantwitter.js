const mongoose =require("mongoose")

const banTwitterSchema=new mongoose.Schema({
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

const BanTwitter=mongoose.model("BanTwitter",banTwitterSchema)
module.exports=BanTwitter