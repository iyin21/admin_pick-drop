import axiosInstance from "./api.services"
import {
    RidersResponse,
    SingleRiderResponse,
    CreateRiderRequest,
} from "../types/api/rider.types"

interface Ifilters {
    status?: boolean
    detailed?: boolean
    page?: number | string
    size?: number
}

export const fetchRiders = async (filter: Ifilters) => {
    const response = await axiosInstance.get<RidersResponse>("/manage/riders", {
        params: filter,
    })
    return response.data
}

export const fetchSingleRider = ({
    id,
    ...detailed
}: {
    id: string
    detailed?: boolean
}) =>
    axiosInstance.get<SingleRiderResponse>(`/manage/riders/${id}`, {
        params: detailed,
    })

export const createRider = async (data: CreateRiderRequest) => {
    return await axiosInstance.post<RidersResponse>("/manage/riders", data)
}
