import mongoose from "mongoose";
import dbConnect from "../dbConnect";
dbConnect();

const PostsSchema = new mongoose.Schema({
    author: String,
    title: String,
    desc: String,
    comments: Number,
});

const Posts = mongoose.models.Posts || mongoose.model("Posts", PostsSchema);

export default Posts;
