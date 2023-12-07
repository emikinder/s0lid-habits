import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "@/firebase/AuthProvider";
import { Button, Input } from "@nextui-org/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { insertHabit } from "@/firebase/firestore";

const habitsMocks = [
    "Read ten pages",
    "Drink 2L of water",
    "Exercise 30 minutes",
    "Meditate 10 minutes",
    "Write 500 words",
    "No alcohol today",
    "No sugar today",
    "Daily Planning",
    "Avoiding Screen Time Before Bed",
    "Learning Something New",
    "Goal tracking on Solid Habits",
];

const NewHabitForm = ({ onChange }) => {
    const { user } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const saveHabit = async (habit) => {
        try {
            await insertHabit(user.uid, habit);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            const newHabit = {
                name: inputValue,
                order: 0,
                active: true,
            };
            saveHabit(newHabit);
            setInputValue("");
            onChange();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center mt-3 gap-1"
        >
            <Input
                placeholder={
                    habitsMocks[Math.floor(Math.random() * habitsMocks.length)]
                }
                isRequired
                variant="bordered"
                size="xs"
                color="success"
                type="text"
                value={inputValue}
                onChange={onChangeHandler}
            />
            <Button
                isIconOnly
                color="success"
                aria-label="Add"
                variant="bordered"
                type="submit"
            >
                <PlusIcon className="h-5 w-5 text-[#fff]" />
            </Button>
            <Button
                isIconOnly
                color="danger"
                aria-label="Cancel"
                variant="bordered"
                onClick={onChange}
            >
                <XMarkIcon className="h-5 w-5 text-[#fff]" />
            </Button>
        </form>
    );
};

NewHabitForm.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default NewHabitForm;
