import styles from "../styles/components/RecentPosts.module.scss";

type RecentPostData = {
    author: string;
    title: string;
    desc: string;
    comments: number;
};

function RecentPost({ author, title, desc, comments }: RecentPostData) {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.footer}>
                <p>
                    <i
                        style={{ marginRight: "4px" }}
                        className="fa fa-comment"
                    ></i>
                    {comments}
                </p>
                <p>{author}</p>
            </div>
        </div>
    );
}

export default RecentPost;
