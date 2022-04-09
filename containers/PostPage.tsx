import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import styles from "../styles/pages/PostPage.module.scss";
import LoadingPage from "./LoadingPage";

function PostPage({ postId }: { postId: string }) {
    const { data: session, status } = useSession();
    const [postData, setPostData] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/posts/" + postId)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPostData(data);
            })
            .catch((err) => {
                console.error(err);
                setPostData(undefined);
            });
    }, []);

    if (status === "loading") {
        return <LoadingPage />;
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {status === "authenticated" && (
                    <Link href="/add_comment">
                        <a className={styles["create-link"]}>Add Comment</a>
                    </Link>
                )}
                <Post {...postData} />
            </main>
            <Footer />
        </>
    );
}

export default PostPage;
