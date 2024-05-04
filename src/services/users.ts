import axiosInstance from "./api.services"
import {
    SingleUserResponse,
    UsersResponse,
    DeactivateUserResponse,
    CreateStaffRequest,
} from "../types/api/users.types"

interface IFilters {
    role?: string
    page?: number | string
    size?: number
    status?: string
    detailed?: string
}

export const fetchUsers = async (filter: IFilters) => {
    const response = await axiosInstance.get<UsersResponse>("/manage/users", {
        params: filter,
    })
    return response.data
}
export const fetchStaffs = async (filter: IFilters) => {
    const response = await axiosInstance.get<UsersResponse>(
        "/manage/users/staffs",
        {
            params: filter,
        }
    )
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

export const createStaff = async (data: CreateStaffRequest) => {
    return await axiosInstance.post<SingleUserResponse>(
        "/manage/users/staffs",
        data
    )
}
