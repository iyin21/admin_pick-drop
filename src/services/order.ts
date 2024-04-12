import axiosInstance from "./api.services"
import { OrdersResponse, SingleOrderResponse } from "../types/api/order.types"

interface IFilters {
    detailed?: boolean
    page?: number | string
    size?: number
    status?: string
    role?: string
    "date-from"?: string
    "date-to"?: string
}

export const fetchOrders = (filters: IFilters) =>
    axiosInstance.get<OrdersResponse>("/manage/orders", {
        params: filters,
    })

export const fetchSingleOrder = ({
    id,
    ...detailed
}: {
    id: string
    detailed?: boolean
}) =>
    axiosInstance.get<SingleOrderResponse>(`/manage/orders/${id}`, {
        params: detailed,
    })
    export const fetchUserOrders = ({
        id,
        ...detailed
    }: {
        id: string
        detailed?: boolean
    }) =>
    axiosInstance.get<OrdersResponse>(`manage/users/${id}/orders`, {
        params: detailed,
    })