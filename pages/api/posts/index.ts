import type { NextApiRequest, NextApiResponse } from "next";
import Posts from "../../../database/models/Posts";

type Data = {
    author: string;
    title: string;
    desc: string;
    comments: number;
    postId: string;
    _id: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    const data: any = await Posts.find().sort({ _id: -1 }); ;
    res.status(200).json(data);
}
