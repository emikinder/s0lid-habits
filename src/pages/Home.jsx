import { PencilIcon } from "@heroicons/react/24/solid";

const Home = () => {
    return (
        <section className="h-full px-2 pt-20 bg-[#111111] text-[white]">
            <h1 className="font-bold tracking-[-2px] text-2xl ">
                Happy{" "}
                <span className="text-[green]">
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                    })}
                </span>
                !
            </h1>
            <a
                href="/myhabits"
                className="w-full mt-2 flex justify-between items-center text-xl tracking-[-1px] text-[#111111] rounded-md bg-[#ffffff] px-5 py-3"
            >
                <span>Manage my habits</span>
                <PencilIcon className="h-6 w-6" />
            </a>
        </section>
    );
};

export default Home;
