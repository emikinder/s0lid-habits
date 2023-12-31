import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/firebase/AuthProvider";
import { Avatar } from "@nextui-org/react";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    let navigate = useNavigate();

    if (!user) {
        return null;
    }

    const handleLogout = async () => {
        try {
            logOut();
            navigate("/login");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleAvatarClick = () => {
        navigate("/home");
    };

    return (
        <nav className="fixed w-full flex justify-between items-center px-3 py-2 bg-[#111111] text-white z-50">
            <div className="flex items-center gap-2 w-1/3">
                <Avatar
                    src={user.photoURL}
                    alt="user photo"
                    size="lg"
                    onClick={handleAvatarClick}
                    referrerPolicy="no-referrer"
                />
            </div>
            <span className="font-bold text-2xl text-center tracking-[-1px] w-1/3">
                Solid Habits
            </span>
            <button
                className="w-1/3"
                onClick={handleLogout}
            >
                <ArrowLeftOnRectangleIcon className="ml-auto h-6 w-6 text-white" />
            </button>
        </nav>
    );
};

export default Navbar;
