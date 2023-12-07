import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";
import { updateHabit } from "@/firebase/firestore";

const HabitModal = ({ habit, isOpen, onClose, userId }) => {
    const [habitName, setHabitName] = useState("");

    useEffect(() => {
        setHabitName(habit.name || "");
    }, [habit.name]);

    const handleChange = (e) => {
        setHabitName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (habitName.trim() !== "") {
            // updateHabit(habitName);
            await updateHabit(userId, habit.id, { name: habitName });
            handleClose();
        }
    };

    const handleClose = () => {
        setHabitName("");
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            backdrop="blur"
            placement="top-center"
            className="bg-[#111111] text-[white] mt-20 mx-3"
            onClose={handleClose}
            isDismissable={false}
        >
            <ModalContent
                as="form"
                onSubmit={handleSubmit}
            >
                <ModalHeader>Update Habit</ModalHeader>
                <ModalBody>
                    <Input
                        placeholder="Habit Name"
                        isRequired
                        autoFocus
                        size="sm"
                        variant="bordered"
                        color="success"
                        onChange={handleChange}
                        value={habitName}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        onPress={handleClose}
                        color="danger"
                        variant="bordered"
                    >
                        Close
                    </Button>
                    <Button
                        color="success"
                        type="submit"
                    >
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

HabitModal.propTypes = {
    habit: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
};

export default HabitModal;
