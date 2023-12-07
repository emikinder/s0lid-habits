import { useState } from "react";
import PropTypes from "prop-types";
import {
    BackspaceIcon,
    Bars4Icon,
    PencilIcon,
} from "@heroicons/react/24/solid";
import HabitModal from "./HabitModal";
import { updateHabit } from "@/firebase/firestore";

export const HabitItem = ({ listView, habit, userId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAction = () => {
        setIsOpen(true);
    };

    const handleDelete = async () => {
        await updateHabit(userId, habit.id, { active: false });
    };

    const Item = listView ? ListItem : GridItem;
    return (
        <Item habit={habit}>
            <button
                className="mx-3"
                onClick={() => handleAction()}
            >
                <PencilIcon className="h-5 w-5 text-[#fff]" />
            </button>
            <button onClick={handleDelete}>
                <BackspaceIcon className="h-5 w-5 text-[#fff]" />
            </button>
            {isOpen && (
                <HabitModal
                    onClose={() => setIsOpen(false)}
                    isOpen={isOpen}
                    habit={habit}
                    userId={userId}
                    // updateHabit={handleUpdate}
                />
            )}
        </Item>
    );
};

const ListItem = ({ habit, children }) => {
    return (
        <section className="font-semibold flex pl-2 pr-3 py-3 my-1 bg-neutral-950 rounded-md border border-[#18c964] items-center">
            <Bars4Icon className="h-6 w-6 text-[#b4b2b2] mr-1" />
            <span className="w-full text-lg leading-tight">{habit.name}</span>
            {children}
        </section>
    );
};

const GridItem = ({ habit, children }) => {
    return (
        <div className="font-semibold min-h-[12vh] flex flex-col justify-between p-2 bg-neutral-950 rounded-md border border-[#18c964]">
            <span className="w-full text-lg">{habit.name}</span>
            <div className="ml-auto flex mt-1">{children}</div>
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
    children: PropTypes.node.isRequired,
};

GridItem.propTypes = {
    habit: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};
