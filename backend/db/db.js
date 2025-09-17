import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: 'dsa-launchpad2025' });
        console.log("MongoDB Connected...");
    } catch (e) {
        console.log(e);
    }
}

export default connectDB;