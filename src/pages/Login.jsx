import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/common/Loading";
import { saveToLocalStorage } from "@/storage/localStorage";

import {
    BoltIcon,
    HeartIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/solid";

const Login = () => {
    const navigate = useNavigate();
    const { signInWithGoogle, user, loading } = useContext(AuthContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            saveToLocalStorage("userConfig", true);
            navigate("/home");
        }
    }, [user, navigate]);

    const handleLogin = async () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.error(error);
            setError("Failed to log in with Google");
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="h-screen bg-gradient-to-br from-[#6a85b6] to-[#d5dff0]">
            <header className="flex items-center justify-center h-2/5">
                <div>
                    <h2 className="font-roboto text-6xl">Solid</h2>
                    <h1 className="font-bricolage text-8xl">Habits</h1>
                </div>
            </header>
            <section className="rounded-t-xl bg-[#111111] text-white flex justify-center p-5 h-3/5">
                <div className="grid grid-flow-row">
                    <div className="">
                        <h3 className="text-3xl md:text-4xl -tracking-wider">
                            A tracker that helps you build{" "}
                            <strong>good habits</strong> and break{" "}
                            <span className="line-through">bad ones</span>.
                        </h3>
                        <div className="flex justify-center">
                            <ul className="text-xl mt-4">
                                <li className="my-2 flex items-center">
                                    <HeartIcon className="text-[green] inline-block w-9 h-9 md:w-7 md:h-7 mr-1" />
                                    <p className="leading-5">Easy to use. Lorem ipsum</p>
                                </li>
                                <li className="my-2 flex items-center">
                                    <SquaresPlusIcon className="text-[green] w-9 h-9 md:w-7 md:h-7 mr-2" />
                                    <p className="leading-5">
                                        Simple interface, focus on most
                                        important.
                                    </p>
                                </li>
                                <li className="my-2 flex items-center">
                                    <BoltIcon className="text-[green] inline-block w-9 h-9 md:w-7 md:h-7 mr-1" />
                                    <p className="leading-5">
                                        Powerful tracking and dashboard.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {error && <p>{error}</p>}
                    <div className="">
                        <button
                            className="bg-white text-gray-600 flex items-center gap-4 px-4 py-2 rounded-md hover:bg-[#d5dff0] hover:text-black transition-all mx-auto"
                            onClick={handleLogin}
                        >
                            <img
                                src="/google-icon.svg"
                                alt="google-icon"
                                width={20}
                            />
                            <p>
                                Continue with <strong>Google</strong>
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Login;
