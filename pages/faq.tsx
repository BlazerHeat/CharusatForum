import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/faqPage.module.scss";

const FAQ = () => {
    return (
        <>
            <Navbar />
            <main className={styles["main"]}>
                <div className={styles["heading"]}>
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div className={styles["cards"]}>
                    <div className={styles["card"]}>
                        <h2>What is charusat forums?</h2>
                        <p>
                            CharusatForums is a place where people can share
                            ideas and views regarding our University.
                        </p>
                    </div>
                    <div className={styles["card"]}>
                        <h2>Why should i create an account here?</h2>
                        <p>
                            The university has specifically no online discussion
                            platforms where students as well as teachers can
                            share their views and send notice.
                        </p>
                    </div>
                    <div className={styles["card"]}>
                        <h2>
                            What are the benefits of creating an account here?
                        </h2>
                        <p>
                            1) Getting regular updates regarding big university
                            events.
                            <br />
                            2) creating a good community for greater good.
                            <br />
                            3) The university user benefits to get a credit on
                            the basis of account created & number of questions
                            answered.
                        </p>
                    </div>
                    <div className={styles["card"]}>
                        <h2>
                            How do i ask questions if I am not from the
                            university?
                        </h2>
                        <p>
                            Only the users which have Charusat ID can ask as
                            well as answer questions, on the other hand the
                            non-charusat ID users can only ask questions only
                            after logging in through google account.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default FAQ;
