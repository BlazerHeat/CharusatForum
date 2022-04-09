import mongoose from "mongoose";
import dbConnect from "../dbConnect";
dbConnect();

const CommentSchema = new mongoose.Schema({
    author: String,
    body: String,
    postId: String,
});

const Comment =
    mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
