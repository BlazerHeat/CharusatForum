import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-container"]}>
                <div className={styles["social-links"]}>
                    <a className={styles["footer-link"]}>
                        <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                    </a>
                    <a className={styles["footer-link"]}>
                        <Link href="#">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </a>
                    <a className={styles["footer-link"]}>
                        <Link href="#">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </a>
                    <a className={styles["footer-link"]}>
                        <Link href="#">
                            <i className="fab fa-discord"></i>
                        </Link>
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
                    <Link href="/about">
                        <a className={styles["quick-link"]}>Developers</a>
                    </Link>
                    <span className={styles["bullet"]}>&bull;</span>
                    <Link href="/carriers">
                        <a className={styles["quick-link"]}>Carriers</a>
                    </Link>
                    <span className={styles["bullet"]}>&bull;</span>
                    <Link href="/contact">
                        <a className={styles["quick-link"]}>About</a>
                    </Link>
                    <span className={styles["bullet"]}>&bull;</span>
                    <Link href="/faq">
                        <a className={styles["quick-link"]}>FAQs</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
