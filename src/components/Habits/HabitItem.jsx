import PropTypes from "prop-types";

export const HabitItem = ({ listView, habit }) => {
    const Item = listView ? ListItem : GridItem;
    return <Item habit={habit} />;
};

const ListItem = ({ habit }) => {
    return (
        <section className="font-semibold flex pl-2 pr-3 py-3 my-1 bg-neutral-950 rounded-md border border-[#18c964] items-center">
            <span className="w-full text-lg leading-tight">{habit.name}</span>
        </section>
    );
};

const GridItem = ({ habit }) => {
    return (
        <div className="font-semibold min-h-[12vh] flex flex-col justify-between p-2 bg-neutral-950 rounded-md border border-[#18c964]">
            <span className="w-full text-lg">{habit.name}</span>
        </div>
    );
};

HabitItem.propTypes = {
    habit: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    listView: PropTypes.bool,
};

ListItem.propTypes = {
    habit: PropTypes.object.isRequired,
};

GridItem.propTypes = {
    habit: PropTypes.object.isRequired,
};
