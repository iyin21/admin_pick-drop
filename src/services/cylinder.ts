import axiosInstance from "./api.services"
import {
    CylinderResponse,
    CreateCylinderRequest,
} from "../types/api/cylinder.types"

interface IFilters {
    detailed?: boolean
    page?: number | string
    size?: number
}
export const fetchCylinder = (filters: IFilters) =>
    axiosInstance.get<CylinderResponse>("/manage/cylinders", {
        params: filters,
    })

export const createCylinder = (data: CreateCylinderRequest) => {
    return axiosInstance.post<CylinderResponse>("/manage/cylinders", data)
}
