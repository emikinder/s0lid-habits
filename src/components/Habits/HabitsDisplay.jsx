/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import { HabitItem } from "./HabitItem";
import { HabitsGrid } from "./HabitsGrid";

const HabitsDisplay = ({ habits, listView = true }) => {
    const { user } = useContext(AuthContext);
    return (
        <HabitsGrid listView={listView}>
            {habits &&
                habits.map((habit, i) => (
                    <HabitItem
                        key={i}
                        habit={habit}
                        listView={listView}
                        userId={user.uid}
                    />
                ))}
        </HabitsGrid>
    );
};

export default HabitsDisplay;
