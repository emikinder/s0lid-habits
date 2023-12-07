import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/firebase/AuthProvider";

import Habits from "@/components/Habits/Habits";
import Loading from "@/components/common/Loading";
import { subscribeToHabits } from "@/firebase/firestore";

const MyHabits = () => {
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
        <section className="pt-20 px-3 h-screen text-[white]">
            <Habits habits={habits} />
        </section>
    );
};

export default MyHabits;
