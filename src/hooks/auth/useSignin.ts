import { useMutation } from "@tanstack/react-query"
import { signin } from "@services/auth"
import { Error } from "../../types/api"
import { showNotification } from "@mantine/notifications"
import useAuth from "./useAuth"
import { useNavigate, useLocation } from "react-router-dom"
import { setAccessToken } from "@services/api.services"

export default function useSignin() {
    const { saveUser, saveToken } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/dashboard"

    const mutation = useMutation({
        mutationFn: signin,
        onSuccess: async ({ data }) => {
            if (data.data.role !== "admin" ) {
                showNotification({
                    title: "Error",
                    message: "Unauthorized User",
                    color: "red",
                })
                return
            }
            setAccessToken(data.token)
            await saveUser(data.data)
            await saveToken(data.token)
            navigate(from, { replace: true })
        },
        onError: (err: Error) => {
            
            showNotification({
                title: "Error",
                message: err.response?.data?.message || err.message,
                color: "red",
            })
        },
    })

    
    return mutation
}
