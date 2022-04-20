import styles from "../styles/components/Footer.module.scss";

function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-container"]}>
                <div className={styles["social-links"]}>
                    <a href="#" className={styles["footer-link"]}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className={styles["footer-link"]}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className={styles["footer-link"]}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className={styles["footer-link"]}>
                        <i className="fab fa-discord"></i>
                    </a>
                </div>
                <hr />
                <div className={styles["copyright-text"]}>
                    <p>
                        &copy; CharusatForums, All rights reserved -{" "}
                        {new Date().getFullYear()}.
                    </p>
                </div>
                <hr />
                <div className={styles["quick-links"]}>
                    <a href="/about" className={styles["quick-link"]}>
                        Developers
                    </a>
                    <span className={styles["bullet"]}>&bull;</span>
                    <a href="/carriers" className={styles["quick-link"]}>
                        Carriers
                    </a>
                    <span className={styles["bullet"]}>&bull;</span>
                    <a href="/contact" className={styles["quick-link"]}>
                        About
                    </a>
                    <span className={styles["bullet"]}>&bull;</span>
                    <a href="/faq" className={styles["quick-link"]}>
                        FAQs
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
