import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecentPost from "../components/RecentPost";
import styles from "../styles/pages/PostsPage.module.scss";
import LoadingPage from "./LoadingPage";

function PostsPage() {
    const { data: session, status } = useSession();
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/posts")
            .then((res) => res.json())
            .then((data) => {
                setRecentPosts(data);
            })
            .catch((err) => {
                console.error(err);
                setRecentPosts([]);
            });
    }, []);

    if (status === "loading") {
        return <LoadingPage />;
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.title}>Posts</h1>
                {status === "authenticated" && (
                    <Link href="/create_post">
                        <a className={styles["create-link"]}>Add Post</a>
                    </Link>
                )}
                <div className={styles.child}>
                    <div className={styles.posts}>
                        {recentPosts.length != 0 &&
                            recentPosts.map((postData, i) => (
                                <RecentPost {...postData} key={i} />
                            ))}
                        {recentPosts.length != 0 &&
                            recentPosts.map((postData, i) => (
                                <RecentPost {...postData} key={i} />
                            ))}
                        {recentPosts.length != 0 &&
                            recentPosts.map((postData, i) => (
                                <RecentPost {...postData} key={i} />
                            ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default PostsPage;
