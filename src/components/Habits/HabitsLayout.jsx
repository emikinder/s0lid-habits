import PropTypes from "prop-types";
import { HabitItem } from "./HabitItem";
import useConfig from "@/storage/useConfig";

export const HabitsLayout = ({ habits, userId }) => {
    const [config] = useConfig();

    if (!habits) {
        return null;
    }

    if (!habits.length) {
        return <div>You have no habits yet. Start by adding a new one!</div>;
    }

    return (
        <section
            className={`mt-2 ${
                config ? "flex flex-col" : "grid grid-cols-2 gap-1"
            }`}
        >
            {habits.map((habit) => (
                <HabitItem
                    key={habit.id}
                    habit={habit}
                    listView={config}
                    userId={userId}
                />
            ))}
        </section>
    );
};

HabitsLayout.propTypes = {
    habits: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    listView: PropTypes.bool,
};
