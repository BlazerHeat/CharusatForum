import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    author: string;
    title: string;
    desc: string;
    comments: number;
};

const data = [
    {
        author: "Vatsal",
        title: "Very Nice!",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa et quia, dolorum laborum, saepe sapiente quaerat dolorem molestiae possimus ipsa labore eos reprehenderit aliquid optio neque qui voluptatibus a!",
        comments: 10,
    },
    {
        author: "Vedant",
        title: "Very Nice!2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa et quia, dolorum laborum, saepe sapiente quaerat dolorem molestiae possimus ipsa labore eos reprehenderit aliquid optio neque qui voluptatibus a!",
        comments: 15,
    },
    {
        author: "Mann",
        title: "Very Nice!3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa et quia, dolorum laborum, saepe sapiente quaerat dolorem molestiae possimus ipsa labore eos reprehenderit aliquid optio neque qui voluptatibus a!",
        comments: 20,
    },
    {
        author: "Bhavik",
        title: "Very Nice!4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa et quia, dolorum laborum, saepe sapiente quaerat dolorem molestiae possimus ipsa labore eos reprehenderit aliquid optio neque qui voluptatibus a!",
        comments: 25,
    },
    {
        author: "Devasya",
        title: "Very Nice5",
        desc: "Just little desc!3",
        comments: 30,
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(data);
}
