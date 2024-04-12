import axiosInstance from "./api.services"
import { VehicleResponse } from "../types/api/vehicle.types"

interface Ifilters {
    detailed?: boolean
    page?: number | string
    size?: number
   
}

export const fetchVehicles = async (filter: Ifilters) => {
    const response = await axiosInstance.get<VehicleResponse>(
        "manage/vehicles",
        {
            params: filter,
        }
    )
    return response.data
}

// export const fetchSingleTransaction = async ({
//     id,
//     ...detailed
// }: {
//     id: string
//     detailed?: boolean
// }) => {
//     const response = await axiosInstance.get<SingleTrasactionResponse>(
//         `/manage/transactions/${id}`,
//         {
//             params: detailed,
//         }
//     )
//     return response.data
// }
