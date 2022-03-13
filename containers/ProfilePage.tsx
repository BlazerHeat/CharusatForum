import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/pages/ProfilePage.module.scss";

function ProfilePage() {
  return (
    <>
    <Navbar />
    <main className={styles.main}></main>
    <Footer />
    </>
  )
}

export default ProfilePage