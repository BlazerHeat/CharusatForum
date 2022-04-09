import type { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../database/models/Comment";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const postData = await Comment.findOne({ _id: req.query.id });
        res.status(202).json(postData);
    } catch (err) {
        res.status(404).json({});
    }
}
