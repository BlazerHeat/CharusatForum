import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
    const { data: session, status } = useSession();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <span className={styles["nav-logo"]}>
                        <Image src="/logo.jpeg" width={50} height={50} alt="logo"/>
                    </span>
                    <h1>Charusat Forums</h1>
                </div>
                <ul className={styles["nav-ul"]}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    {!session && status != "loading" && (
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                    {session && (
                        <>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <button onClick={() => signOut()}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
