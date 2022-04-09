import { useSession } from "next-auth/react";
import Router from "next/router";
import LoadingPage from "../containers/LoadingPage";
import LoginPage from "../containers/LoginPage";

function Login() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <LoadingPage />;
    } else if (status === "authenticated" && typeof window !== "undefined") {
        Router.push("/");
        return <LoadingPage />;
    }

    return <LoginPage />;
}

export default Login;
