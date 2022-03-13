import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/AboutPage.module.scss";

function AboutPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div>About</div>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;
