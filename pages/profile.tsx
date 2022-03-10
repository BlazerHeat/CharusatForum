import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingPage from "../containers/LoadingPage";

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

    return (
        <>
            <Navbar />
            <p style={{ paddingTop: 100, minHeight: "100vh" }}>
                {JSON.stringify(session, null, 4)}
            </p>
            <Footer />
        </>
    );
}

export default Profile;
