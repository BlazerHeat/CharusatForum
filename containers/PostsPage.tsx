import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/PostsPage.module.scss";

function PostsPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div>Posts</div>
            </main>
            <Footer />
        </>
    );
}

export default PostsPage;
