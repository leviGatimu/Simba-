import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/Simba");
        console.log("Mongoose running succesfully ✅");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;