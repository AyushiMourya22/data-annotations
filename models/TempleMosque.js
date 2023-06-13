const mongoose =require("mongoose")

const templeMosqueSchema=new mongoose.Schema({
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

const TempleMosque=mongoose.model("TempleMosque",templeMosqueSchema)
module.exports=TempleMosque