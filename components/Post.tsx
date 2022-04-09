import styles from "../styles/components/Post.module.scss";

const Post = ({ author, title, comments, body }: any) => {
    return (
        <div className={styles.page}>
            <h2>{title}</h2>
            <div className={styles.sub}>
                <h5>By {author}</h5>
                {comments && (
                    <p>
                        {comments.length} comments{"  "}
                        <i
                            style={{ marginRight: "4px" }}
                            className="fa fa-comments"
                        ></i>
                    </p>
                )}
            </div>
            <p>{body}</p>
        </div>
    );
};

export default Post;
