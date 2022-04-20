import CreatePostForm from "../components/CreatePostForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/CreatePostPage.module.scss";

const CreatePostPage = () => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <CreatePostForm />
            </main>
            <Footer />
        </>
    );
};

export default CreatePostPage;
