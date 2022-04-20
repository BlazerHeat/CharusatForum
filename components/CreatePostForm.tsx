import styles from "../styles/components/CreatePostForm.module.scss";

const CreatePostForm = () => {
    return (
        <form className={styles.form} method="post" action="/api/create_post">
            <div className={styles["input-container"]}>
                <input type="text" name="title" id="title" required />
                <label htmlFor="title">Title</label>
                <p
                    id="name-error"
                    style={{ color: "red", fontSize: ".8em" }}
                ></p>
            </div>
            <div className={styles["input-container"]}>
                <input type="text" name="desc" id="desc" required />
                <label htmlFor="desc">Small Desc</label>
                <p
                    id="email-error"
                    style={{ color: "red", fontSize: ".8em" }}
                ></p>
            </div>

            <div>
                <label
                    style={{ fontWeight: 500, fontSize: "1.2em" }}
                    htmlFor="body"
                >
                    Body
                </label>{" "}
                <br />
                <textarea
                    name="body"
                    id="body"
                    required
                    rows={10}
                    cols={60}
                ></textarea>
                <p
                    id="message-error"
                    style={{ color: "red", fontSize: ".8em" }}
                ></p>
            </div>
            <button type="submit">
                {" "}
                Submit <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    );
};

export default CreatePostForm;
