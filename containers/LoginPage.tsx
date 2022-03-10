import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/pages/LoginPage.module.scss";
import { signIn } from "next-auth/react";

function LoginPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <form className={styles.form}>
                    <h2 className={styles.title}>CHARUSAT FORM</h2>
                    <p className={styles["title-desc"]}>
                        A place to share and expand knowledge
                    </p>

                    <div className={styles['login-links']}>
                        <p className={styles.disclaimer}>
                            Sign-in with Charsuat ID
                        </p>
                        <div>
                            <button
                                type="button"
                                className={styles['login-btn']}
                                onClick={() =>
                                    signIn("google", {
                                        callbackUrl: "http://localhost:3000/",
                                    })
                                }
                            >
                                Sign in with Google
                            </button>
                        </div>
                    </div>

                    <p className={styles['footer-desc']}>
                        By continuing you indicate that you agree to Charusat's
                        Terms of Service and Privacy Policy.
                    </p>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default LoginPage;
