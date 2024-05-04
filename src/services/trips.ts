import axiosInstance from "./api.services"
import { TripsResponse } from "../types/api/trips.types"

interface Ifilters {
    detailed?: boolean
    page?: number | string
    size?: number
    id: string
}

export const fetchTrips = async ({ id, ...filter }: Ifilters) => {
    const response = await axiosInstance.get<TripsResponse>(
        `/manage/riders/${id}/trips`,
        {
            params: filter,
        }
    )
    return response.data
}
