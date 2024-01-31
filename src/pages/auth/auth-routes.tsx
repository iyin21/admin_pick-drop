import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "@hooks/auth/useAuth"

const AuthRoutes = () => {
    const { isAuthenticated } = useAuth()
    const location = useLocation()
    console.log("dff", isAuthenticated)

    return !isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/dashboard" state={{ from: location }} replace />
    )
}

export default AuthRoutes
