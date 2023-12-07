/* eslint-disable react/prop-types */
import useConfig from "@/storage/useConfig";
import { QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

const ToggleView = () => {
    const [config, setConfig] = useConfig();

    const handleToggle = () => {
        setConfig(!config);
    };

    const Icon = config ? Squares2X2Icon : QueueListIcon;
    return (
        <button onClick={handleToggle}>
            <Icon className="h-6 w-6" />
        </button>
    );
};

export default ToggleView;
