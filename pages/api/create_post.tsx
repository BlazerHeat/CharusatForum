// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Posts from "../../database/models/Posts";
import Post from "../../database/models/Post";
import config from "../../config.json";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const url = config.PRODUCTION
        ? config.PRODUCTION_URL
        : config.DEVELOPEMENT_URL;
    const session = await getSession({ req });
    if (!session) {
        res.redirect("/login");
        return;
    }
    console.log(req.body);
    console.log(session);
    const newRecentPost = {
        author: session?.user?.name?.split(" ")[1],
        title: req.body.title,
        desc: req.body.desc,
        comments: 0,
    };

    const newRecPRec = new Posts(newRecentPost);
    await newRecPRec.save();

    const newPost = {
        author: newRecentPost.author,
        title: newRecentPost.title,
        body: req.body.body,
        comments: [],
        postId: newRecPRec._id,
    };
    const newRec = new Post(newPost);
    await newRec.save();

    res.redirect(url + "/posts/" + newRecPRec._id.toString());
}
