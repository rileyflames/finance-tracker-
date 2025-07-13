import mongoose from "mongoose";

// database connection

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB ✅`);
        
    } catch (error) {
        console.error(`MongoDB connection error`);
        process.exit(1)
        
    }
}



export default connectDB