import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Connected to MongoDB");
        });
        connection.on('error', (err) => {
            console.log("MOngoDB connection error plz make sure that you are connected to mongodb", err);
        });
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}
