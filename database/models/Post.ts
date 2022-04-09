import mongoose from "mongoose";
import dbConnect from "../dbConnect";
dbConnect();

const PostSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    comments: {
        type: Array,
        default: [],
    },
    postId: String,
});

const Post = mongoose.models.PostData || mongoose.model("PostData", PostSchema);

export default Post;
