import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/home");
    };

    return (
        <section className="px-2 pt-20 text-[white]">
            <h1 className="text-3xl font-bold tracking-[-2px]">Page not found</h1>
            <p>
                Go back to{" "}
                <Button
                    color="success"
                    className="mt-4 text-white text-md font-bold tracking-[-1px]"
                    radius="xs"
                    onClick={handleGoHome}
                >
                    Home
                </Button>
            </p>
        </section>
    );
};

export default NotFound;
