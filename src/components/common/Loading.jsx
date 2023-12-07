import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="bg-[#111111] w-full h-full flex justify-center pt-10">
            <CircularProgress
                color="success"
                aria-label="Loading..."
                size="lg"
            />
        </div>
    );
};

export default Loading;
