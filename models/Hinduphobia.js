const mongoose =require("mongoose")

const hinduphobiaSchema=new mongoose.Schema({
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

const Hinduphobia=mongoose.model("Hinduphobia",hinduphobiaSchema)
module.exports=Hinduphobia