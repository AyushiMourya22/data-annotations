const mongoose=require("mongoose")

const otherSchema=new mongoose.Schema({
    tweet_id:{
        type:String,
        required:true
    },
    tweet:{
        type:String,
        required:true
    },
    comments:{
        type:Array,
        required:true
    },
})
module.exports=mongoose.model('Other',otherSchema)

