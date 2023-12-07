import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "@/firebase/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "@/components/common/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
