import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/common/Loading";
import { saveToLocalStorage } from "@/storage/localStorage";
import Balancer from "react-wrap-balancer";

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
            <header className="flex items-center justify-center md:h-2/5 py-10">
                <div>
                    <h1 className="text-6xl md:text-7xl text-center font-bold tracking-tighter">
                        <Balancer>Welcome to Solid Habits</Balancer>
                    </h1>
                    <p className="max-w-[600px] mx-auto text-gray-700 mt-3 text-xl text-center dark:text-gray-400">
                        <Balancer>
                            Your partner in building and maintaining your daily
                            habits.
                        </Balancer>
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center mt-5 px-2">
                        <button
                            className="bg-white w-[230px] text-gray-600 flex justify-center gap-4 px-4 py-2 rounded-md hover:bg-[#d5dff0] hover:text-black transition-all"
                            onClick={handleLogin}
                        >
                            <img
                                src="/google-icon.svg"
                                alt="google-icon"
                                width={20}
                            />
                            <p>
                                Sign in with <strong>Google</strong>
                            </p>
                        </button>
                        <button
                            className="bg-white w-[230px] text-center text-gray-600 gap-4 px-4 py-2 rounded-md hover:bg-[#d5dff0] hover:text-black transition-all"
                            onClick={handleLogin}
                        >
                            <p>Sign in with Email</p>
                        </button>
                    </div>
                    {/* <h2 className="font-roboto text-6xl">Solid</h2>
                    <h1 className="font-bricolage text-8xl">Habits</h1> */}
                </div>
            </header>
            <section className="rounded-t-xl bg-[#111111] text-white px-5 pt-10 md:pt-20 h-3/5">
                <div className="md:w-[60%] mx-auto grid gap-10">
                    <h3 className="text-4xl md:text-5xl -tracking-wider text-center">
                        <Balancer>
                            A tracker that helps you build{" "}
                            <strong className="font-bricolage">
                                good habits
                            </strong>{" "}
                            and break{" "}
                            <span className="line-through">bad ones</span> your{" "}
                            <strong className="font-bricolage">limits</strong>.
                        </Balancer>
                    </h3>
                    <div className="flex justify-center">
                        <ul className="text-xl">
                            <li className="my-2 flex items-center">
                                <HeartIcon className="text-[green] inline-block w-9 h-9 md:w-7 md:h-7 mr-1" />
                                <p className="leading-5">
                                    Monitor your habit performance over time.
                                </p>
                            </li>
                            <li className="my-2 flex items-center">
                                <SquaresPlusIcon className="text-[green] w-9 h-9 md:w-7 md:h-7 mr-2" />
                                <p className="leading-5">
                                    Simple interface, focus on most important.
                                </p>
                            </li>
                            <li className="my-2 flex items-center">
                                <BoltIcon className="text-[green] inline-block w-9 h-9 md:w-7 md:h-7 mr-1" />
                                <p className="leading-5">
                                    Set weekly or monthly habit goals and meet
                                    them.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                {error && <p>{error}</p>}
            </section>
        </section>
    );
};

export default Login;
