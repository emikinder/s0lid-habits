import { useState } from "react";
import { Button } from "@nextui-org/react";
import NewHabitForm from "./NewHabitForm";

const NewHabit = () => {
    const [addHabit, setAddHabit] = useState(false);

    const handleOpenCreate = () => {
        setAddHabit(true);
    };

    const handleCloseCreate = () => {
        setAddHabit(false);
    };

    return (
        <>
            <Button
                color="success"
                className="w-full mt-3 text-white text-xl font-bold tracking-[-1px]"
                radius="xs"
                onPress={handleOpenCreate}
            >
                Add new habit
            </Button>
            {addHabit && <NewHabitForm onChange={handleCloseCreate} />}
        </>
    );
};

export default NewHabit;
