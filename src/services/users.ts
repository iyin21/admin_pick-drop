import axiosInstance from "./api.services"
import { SingleUserResponse, UsersResponse, DeactivateUserResponse } from "../types/api/users.types"

interface IFilters {
    role?: string
    page?: number | string
    size?: number
    status?: string
}

export const fetchUsers = async (filter: IFilters) => {
    const response = await axiosInstance.get<UsersResponse>("/manage/users", {
        params: filter,
    })
    return response.data
}

export const fetchSingleUser = async ({
    id,
    ...detailed
}: {
    id: string
    detailed?: boolean
}) => {
    const response = await axiosInstance.get<SingleUserResponse>(
        `/manage/users/${id}`,
        {
            params: detailed,
        }
    )
    return response.data
}

export const deactivateUser = (id: string) => {
    return axiosInstance.put<DeactivateUserResponse>(`/users/${id}/deactivate`)
}
export const activateUser = (id: string) => {
    return axiosInstance.put<DeactivateUserResponse>(`/users/${id}/activate`)
}
