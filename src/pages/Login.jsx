import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/common/Loading";

const Login = () => {
    const navigate = useNavigate();
    const { signInWithGoogle, user, loading } = useContext(AuthContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user, navigate]);

    const handleLogin = async () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.log(error);
            setError("Failed to log in with Google");
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="w-full h-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] flex flex-col justify-center items-center gap-10">
            <section>
                <p className="font-roboto text-6xl">Solid</p>
                <p className="font-bricolage text-8xl">Habits</p>
            </section>
            {error && <p>{error}</p>}
            <button
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#bdbabc] transition-all"
                onClick={handleLogin}
            >
                Login with <strong>Google</strong>
            </button>
        </section>
    );
};

export default Login;
