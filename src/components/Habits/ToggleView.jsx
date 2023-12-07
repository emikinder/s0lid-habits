/* eslint-disable react/prop-types */
import { QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

const ToggleView = ({ isListView, setListView }) => {
    const Icon = isListView ? Squares2X2Icon : QueueListIcon;
    return (
        <div className="flex justify-between">
            <h1 className="font-bold text-2xl tracking-[-2px]">My habits</h1>
            <button onClick={() => setListView(!isListView)}>
                <Icon className="h-6 w-6" />
            </button>
        </div>
    );
};

export default ToggleView;
