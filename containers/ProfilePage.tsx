import { Session, User } from "next-auth";
import Image from "next/image";
import { type } from "os";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/ProfilePage.module.scss";

type UserData = {
    databaseData: {
        email: string;
        hd: string;
        image: string;
        name: string;
        posts: number;
        likes: number;
        comments: number;
    };
};

function ProfilePage({ userData }: { userData: UserData }) {
    const { databaseData } = userData;

    console.log(databaseData);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.page}>
                    <div className={styles["profile-pic"]}>
                        <Image
                            src={databaseData.image}
                            width="200"
                            height="200"
                        ></Image>
                    </div>
                    <div className={styles["social-count"]}>
                        <div className={styles.posts}>
                            <em>{databaseData.posts}</em>
                            <p>Posts</p>
                        </div>
                        <div className={styles.comments}>
                            <em>{databaseData.comments}</em>
                            <p>Comments</p>
                        </div>
                        <div className={styles.likes}>
                            <em>{databaseData.likes}</em>
                            <p>Likes</p>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <em>{databaseData.name}</em>
                        <p className={styles.email}>{databaseData.email}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default ProfilePage;
