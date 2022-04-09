import mongoose from "mongoose";
import dbConnect from "../dbConnect";
dbConnect();

const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    image: String,
    hd: String,
    familyName: String,
    giveName: String,
    comments: {
        type: Number,
        default: 0
    },
    posts: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default Users;
