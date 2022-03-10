import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecentPost from "../components/RecentPost";
import styles from "../styles/pages/HomePage.module.scss";
import { useState, useEffect } from "react";

function HomePage() {
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

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.page}>
                    <h1 className={styles.title}>Recent Posts</h1>
                    <div className={styles.posts}>
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

export default HomePage;
