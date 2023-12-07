import { useState } from "react";
import PropTypes from "prop-types";
import {
    BackspaceIcon,
    Bars4Icon,
    PencilIcon,
} from "@heroicons/react/24/solid";
import { updateHabit } from "@/firebase/firestore";
import HabitModal from "./HabitModal";

export const HabitsListItem = ({ habit, userId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAction = () => {
        setIsOpen(true);
    };

    const handleDelete = async () => {
        await updateHabit(userId, habit.id, { active: false });
    };

    return (
        <section className="font-semibold flex pl-2 pr-3 py-3 my-1 bg-neutral-950 rounded-md border border-[#18c964] items-center">
            <Bars4Icon className="h-6 w-6 text-[#b4b2b2] mr-1" />
            <span className="w-full text-lg leading-tight">{habit.name}</span>
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
                />
            )}
        </section>
    );
};

HabitsListItem.propTypes = {
    habit: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
};
