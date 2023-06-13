const mongoose =require("mongoose")

const celebritySchema=new mongoose.Schema({
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

const Celebrity=mongoose.model("celebrity",celebritySchema)
module.exports=Celebrity