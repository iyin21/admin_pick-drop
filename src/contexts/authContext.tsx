import { User } from "../types/api/auth.types"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { setAccessToken, removeAccessToken, setExpiryInterceptor } from "@services/api.services"
import { useNavigate,  } from "react-router-dom"

interface IAuthContext {
    isAuthenticated: boolean
    user: User | null
    token: string | null
    saveUser: (user: User) => Promise<void>
    saveToken: (token: string) => Promise<void>
    logout: () => Promise<void>
}
const storedUser = sessionStorage.getItem("user")
    const storedToken = sessionStorage.getItem("token")
export const AuthContext = createContext<IAuthContext>({
    isAuthenticated: !!storedUser|| !!storedToken ,
    user: null,
    token: null,
    saveUser: () => new Promise(() => null),
    saveToken: () => new Promise(() => null),
    logout: () => new Promise(() => null),
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = useQueryClient()
    const [user, setUser] = useState<User | null>(storedUser?JSON.parse(storedUser):null)
    const [token, setToken] = useState<string | null>(storedToken?JSON.parse(storedToken):null)
    const navigate = useNavigate()
    const handleSaveToken = async (data: string) => {
        sessionStorage.setItem("token", JSON.stringify(data)), setToken(data)
    }

    const handleSaveUser = async (data: User) => {
        sessionStorage.setItem("user", JSON.stringify(data))
        setUser(data)
    }

    const destroyUserSession = async () => {
        if (user) sessionStorage.removeItem("user")
        if (token) await sessionStorage.removeItem("token")
        setUser(null)
        setToken(null)
    }

    const logout = async () => {
        await destroyUserSession()
        removeAccessToken()
        queryClient.resetQueries()
    }
    
    // useEffect(() => {
        
    //     if (storedToken) {
    //         setToken(JSON.parse(storedToken))
            
    //     }
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser) as User)
    //     }
    // }, []);
        useEffect(() => {
            if (token) {
                setAccessToken(token);
            }
            
            setExpiryInterceptor(async () => {
                await destroyUserSession()
                navigate("/signin")
                
            });
        }, [token]);
        return (
            <AuthContext.Provider
                value={{
                    user,
                    token,
                    isAuthenticated: !!token && !!user,
                    saveToken: handleSaveToken,
                    saveUser: handleSaveUser,
                    logout,
                }}
            >
                {children}
            </AuthContext.Provider>
        );
    
}
