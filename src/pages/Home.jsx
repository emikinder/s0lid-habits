import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import Loading from "@/components/common/Loading";
import { PencilIcon } from "@heroicons/react/24/solid";
import { subscribeToHabits } from "@/firebase/firestore";
import HabitsDisplay from "@/components/Habits/HabitsDisplay";
import ToggleView from "@/components/Habits/ToggleView";

const Home = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = subscribeToHabits(user.uid, setHabits, setLoading);
        return () => unsubscribe();
    }, [user]);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="h-full px-2 pt-20 bg-[#111111] text-[white]">
            <section className="flex justify-between">
                <h1 className="font-bold tracking-[-2px] text-2xl ">
                    Happy{" "}
                    <span className="text-[green]">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                        })}
                    </span>
                    !
                </h1>
                <ToggleView />
            </section>
            <a
                href="/myhabits"
                className="w-full mt-2 flex justify-between items-center text-xl tracking-[-1px] text-[#111111] rounded-md bg-[#ffffff] px-5 py-3"
            >
                <span>Manage my habits</span>
                <PencilIcon className="h-6 w-6" />
            </a>
            <HabitsDisplay
                habits={habits}
                mainMode
            />
        </section>
    );
};

export default Home;
