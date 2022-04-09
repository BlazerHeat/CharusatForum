import type { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../database/models/Post";
import Posts from "../../../database/models/Posts";

type Data = {
    author: string;
    title: string;
    desc: string;
    comments: number;
    postId: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[] | {}>
) {
    try {
        const postData = await Post.findOne({ postId: req.query.id });
        res.status(202).json(postData);
    } catch (err) {
        res.status(404).json({});
    }
}
