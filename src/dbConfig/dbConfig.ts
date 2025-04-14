import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            serverSelectionTimeoutMS: 50000, // Increased to 50 seconds
            socketTimeoutMS: 50000,          // Increased to 50 seconds
            connectTimeoutMS: 50000,         // Increased to 50 seconds
        });

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB Connection Error: ' + err);
            // Don't exit immediately, let the error propagate
        });

    } catch (err) {
        console.log("MongoDB Connection Failed");
        console.log(err);
        // Throw the error instead of exiting
        throw err;
    }
}
