import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/LoadingPage.module.scss";

function LoadingPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles['hero-text']}>Loading...</h1>
            </main>
            <Footer />
        </>
    );
}

export default LoadingPage;
