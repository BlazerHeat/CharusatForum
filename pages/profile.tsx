import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingPage from "../containers/LoadingPage";
import ProfilePage from "../containers/ProfilePage";

function Profile() {
    const { data: session, status } = useSession();

    const router = useRouter();

    if (status === "loading") {
        return <LoadingPage />;
    }
    if (status === "unauthenticated" && typeof window !== "undefined") {
        router.push("/");
        return <LoadingPage />;
    }

    return <ProfilePage />;
}

export default Profile;
