const mongoose =require("mongoose")

const ozilSchema=new mongoose.Schema({
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

const Ozil=mongoose.model("Ozil",ozilSchema)
module.exports=Ozil