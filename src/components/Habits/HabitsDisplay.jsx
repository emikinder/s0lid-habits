import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import { HabitsLayout } from "./HabitsLayout";
import HabitsList from "./HabitsList";

const HabitsDisplay = ({ habits, mainMode = false }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {mainMode ? (
                <HabitsLayout
                    habits={habits}
                    userId={user.uid}
                />
            ) : (
                <HabitsList
                    habits={habits}
                    userId={user.uid}
                />
            )}
        </>
    );
};

HabitsDisplay.propTypes = {
    habits: PropTypes.array.isRequired,
    mainMode: PropTypes.bool,
};

export default HabitsDisplay;
