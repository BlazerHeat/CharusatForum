import mongoose from "mongoose";
import Post from "./models/Post";
import Posts from "./models/Posts";

export default async function dbConnect() {
    const uri = process.env.DATABASE_URI;
    const isConnected =
        mongoose.connection.readyState ===
            mongoose.ConnectionStates.connected ||
        mongoose.connection.readyState === mongoose.ConnectionStates.connecting;

    if (!uri) {
        throw new Error("Define `DATABASE_URI` in Enviroment Variables.");
    }

    if (!isConnected) {
        try {
            await mongoose.connect(uri);
            console.log("Successfully connected to database!");
        } catch (err) {
            throw err;
        }
    }
}
