import PropTypes from "prop-types";
import { HabitsListItem } from "./HabitsListItem";

const HabitsList = ({ habits, userId }) => {
    return (
        <section className="mt-2">
            {habits.map((habit, i) => (
                <HabitsListItem
                    key={i}
                    habit={habit}
                    userId={userId}
                />
            ))}
        </section>
    );
};

HabitsList.propTypes = {
    habits: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
};

export default HabitsList;
