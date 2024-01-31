import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "@hooks/auth/useAuth"

const RequireAuth = () => {
    const { isAuthenticated, } = useAuth()
    const location = useLocation()
    
    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" state={{ from: location }} replace />
    )
}

export default RequireAuth
