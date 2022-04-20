import Link from "next/link";
import styles from "../styles/components/RecentPosts.module.scss";

type RecentPostData = {
    author: string;
    title: string;
    desc: string;
    comments: number;
    _id: string;
};

function RecentPost({ author, title, desc, comments, _id }: RecentPostData) {
    return (
        <Link href={`/posts/${_id}`} passHref>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.desc}>{desc}</p>
                <div className={styles.footer}>
                    <p>
                        <i
                            style={{ marginRight: "4px" }}
                            className="fa fa-comments"
                        ></i>
                        {comments}
                    </p>
                    <p>{author}</p>
                </div>
            </div>
        </Link>
    );
}

export default RecentPost;
