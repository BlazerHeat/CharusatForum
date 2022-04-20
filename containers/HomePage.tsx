import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecentPost from "../components/RecentPost";
import styles from "../styles/pages/HomePage.module.scss";
import { useState, useEffect } from "react";
import config from "../config.json";
import CreatePostForm from "../components/CreatePostForm";
import Link from "next/link";

function HomePage() {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const url = config.PRODUCTION
            ? config.PRODUCTION_URL
            : config.DEVELOPEMENT_URL;

        fetch(url + "/api/posts")
            .then((res) => res.json())
            .then((data) => {
                setRecentPosts(data.slice(0, 5));
            })
            .catch((err) => {
                console.error(err);
                setRecentPosts([]);
            });
    }, []);

    return (
        <>
            <Navbar />
            <main className={`${styles.main2} ${styles.main}`}>
                <h1>Welcome to Charusat Forums!</h1>
                <div className={styles["typings-conatiner"]}>
                    <div className="typings"></div>
                </div>
                <Link href="/login">
                    <a className={styles["hero-btn"]}>Get Started</a>
                </Link>
            </main>
            <main className={styles.main}>
                <div className={styles.page}>
                    <h1 className={styles.title}>Recent Posts</h1>
                    <div className={styles.posts}>
                        {recentPosts.length != 0 &&
                            recentPosts.map((postData, i) => (
                                <RecentPost {...postData} key={i} />
                            ))}
                    </div>
                    <div className={styles["form-div"]}>
                        <CreatePostForm />
                    </div>
                </div>
            </main>
            <Footer />
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
            <script type="text/javascript" src="/js/home.js"></script>
        </>
    );
}

export default HomePage;
