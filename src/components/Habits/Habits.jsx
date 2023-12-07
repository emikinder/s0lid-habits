import PropTypes from "prop-types";
import NewHabit from "./NewHabit";
import HabitsDisplay from "./HabitsDisplay";

const Habits = ({ habits }) => {

    return (
        <>
            {/* <ToggleView
                isListView={listView}
                setListView={setListView}
            /> */}
            <h1 className="font-bold text-2xl tracking-[-2px]">My habits</h1>
            {habits && habits.length === 0 && <p>No habits yet!</p>}
            <NewHabit />
            <HabitsDisplay
                habits={habits}
                // listView={true}
            />
        </>
    );
};

Habits.propTypes = {
    habits: PropTypes.arrayOf(PropTypes.object),
};

export default Habits;
