import { Children } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

export const ProtectedRoute = ({
    isAllowed,
    redirectTo = '/Login',
    children
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet />
}