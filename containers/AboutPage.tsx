import Image from "next/image";
import Script from "next/script";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/AboutPage.module.scss";

function AboutPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1
                    className={`${styles["head-text"]} ${styles["rainbow"]} ${styles["rainbow_text_animated"]}`}
                >
                    "Meet Us, Developers of Charusat Forums."
                </h1>
                <div
                    className={`${styles["cards-container"]} ${styles["swiper"]}`}
                >
                    <div className={styles["swiper-wrapper"]}>
                        <div
                            className={`${styles["card"]} ${styles["swiper-slide"]}`}
                        >
                            <div className={styles["profile"]}>
                                <Image
                                    src="/vatsal.jpg"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles["profile-name"]}>
                                    Vatsal Ghoghari
                                </p>
                            </div>
                            <div className={styles["profile-bottom"]}>
                                <p className={styles["about"]}>
                                    Vatsal is currently a budding CS student
                                    with a focus on becoming a successful full
                                    stack developer. <br />
                                    <br />
                                    His core skills are web-designing, process
                                    optimisation and web-security. <br />
                                    <br />
                                    He is a native gujarati, hindi and english
                                    speaker.
                                </p>
                                <div className={styles["btn-container"]}>
                                    <a
                                        href="https://web.whatsapp.com/send?phone=917203088769"
                                        target="_blank"
                                        className={styles["msg-btn"]}
                                    >
                                        Message{" "}
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/vatsal_ghoghari/"
                                        target="_blank"
                                        className={styles["follow-btn"]}
                                    >
                                        Follow{" "}
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${styles["card"]} ${styles["swiper-slide"]}`}
                        >
                            <div className={styles["profile"]}>
                                <Image
                                    src="/vedant.jpg"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles["profile-name"]}>
                                    Vedant Bhatt
                                </p>
                            </div>
                            <div className={styles["profile-bottom"]}>
                                <p className={styles["about"]}>
                                    Vedant is currently a budding CS student
                                    with a focus on becoming a successful
                                    entrepreneur.
                                    <br />
                                    <br />
                                    His core skills are frontend development,
                                    marketing and strategy.
                                    <br />
                                    <br />
                                    He is a native gujarati, hindi and english
                                    speaker.
                                </p>
                                <div className={styles["btn-container"]}>
                                    <a
                                        href="https://web.whatsapp.com/send?phone=919638766257"
                                        target="_blank"
                                        className={styles["msg-btn"]}
                                    >
                                        Message{" "}
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/vedant_bhatt/"
                                        target="_blank"
                                        className={styles["follow-btn"]}
                                    >
                                        Follow{" "}
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${styles["card"]} ${styles["swiper-slide"]}`}
                        >
                            <div className={styles["profile"]}>
                                <Image
                                    src="/mann.jpg"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles["profile-name"]}>
                                    Mann Chandarana
                                </p>
                            </div>
                            <div className={styles["profile-bottom"]}>
                                <p className={styles["about"]}>
                                    Mann is currently a budding CS student with
                                    a focus on becoming a successful software
                                    developer.
                                    <br />
                                    <br />
                                    His core skills are webdesigning,
                                    problem-solving and UI designing.
                                    <br />
                                    <br />
                                    He is a native gujarati, hindi and english
                                    speaker.
                                </p>
                                <div className={styles["btn-container"]}>
                                    <a
                                        href="https://web.whatsapp.com/send?phone=919023974622"
                                        target="_blank"
                                        className="msg-btn"
                                    >
                                        Message{" "}
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className={styles["follow-btn"]}
                                    >
                                        Follow{" "}
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${styles["card"]} ${styles["swiper-slide"]}`}
                        >
                            <div className={styles["about"]}>
                                <Image
                                    src="/bhavik.jpg"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles["profile-name"]}>
                                    Bhavik Ambasana
                                </p>
                            </div>
                            <div className={styles["profile-bottom"]}>
                                <p className={styles["about"]}>
                                    Bhavik is currently a budding CS student
                                    with a focus on becoming a successful IT
                                    consultant.
                                    <br />
                                    <br />
                                    His core skills are cyber security, cloud
                                    computing and machine learning.
                                    <br />
                                    <br />
                                    He is a native gujarati, hindi and english
                                    speaker.
                                </p>
                                <div className={styles["btn-container"]}>
                                    <a
                                        href="https://web.whatsapp.com/send?phone=917990122802"
                                        target="_blank"
                                        className={styles["msg-btn"]}
                                    >
                                        Message{" "}
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/bhavikambasana90/"
                                        target="_blank"
                                        className={styles["follow-btn"]}
                                    >
                                        Follow{" "}
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </main>
            <Footer />

            <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
            <script type="text/javascript" src="/js/developers.js"></script>
        </>
    );
}

export default AboutPage;
