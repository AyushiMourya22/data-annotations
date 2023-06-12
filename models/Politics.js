const mongoose =require("mongoose")

const politicsSchema=new mongoose.Schema({
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

const PoliticsModel=mongoose.model("Indian Politic",politicsSchema)
module.exports=PoliticsModel