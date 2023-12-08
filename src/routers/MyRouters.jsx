import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyHabits from "@/pages/MyHabits";
import NotFound from "@/pages/NotFound";
import PrivateRoute from "@/components/PrivateRoute";

function MyRoutes() {
    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="/myhabits"
                element={
                    <PrivateRoute>
                        <MyHabits />
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
            <Route
                path="/"
                element={<Login />}
            />
        </Routes>
    );
}

export default MyRoutes;
