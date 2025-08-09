import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    link : {
        type : String ,
        required : true ,
    }
})

const link = mongoose.model('link' , linkSchema);
export default link ;