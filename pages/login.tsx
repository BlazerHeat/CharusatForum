import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoadingPage from "../containers/LoadingPage";
import LoginPage from "../containers/LoginPage";

function Login() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <LoadingPage />;
    } else if (status === "authenticated" && typeof window !== "undefined") {
        router.push("/");
        return <LoadingPage />;
    }

    return <LoginPage />;
}

export default Login;
