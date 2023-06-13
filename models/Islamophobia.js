const mongoose =require("mongoose")

const islamophobiaSchema=new mongoose.Schema({
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

const Islamophobia=mongoose.model("Islamophobia",islamophobiaSchema)
module.exports=Islamophobia