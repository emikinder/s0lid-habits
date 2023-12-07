import { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const useConfig = () => {
    const CONFIG = "userConfig";
    const initialValue = loadFromLocalStorage(CONFIG);
    const [config, setConfig] = useState(initialValue);

    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === CONFIG) {
                setConfig(JSON.parse(e.newValue));
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [config]);

    const updateConfig = (newValue) => {
        saveToLocalStorage(CONFIG, newValue);
        let event = new Event("storage");
        event.key = CONFIG;
        event.newValue = newValue;
        window.dispatchEvent(event);
    };
    return [config, updateConfig];
};

export default useConfig;
