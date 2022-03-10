import styles from "../styles/components/Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; CharusatForum, All rights reserved -{" "}
                {new Date().getFullYear()}.
            </p>
        </footer>
    );
}

export default Footer;
