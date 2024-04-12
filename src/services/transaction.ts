import axiosInstance from "./api.services"
import {
    TransactionsResponse,
    SingleTrasactionResponse,
} from "../types/api/transactions"

interface Ifilters {
    detailed?: boolean
    page?: number | string
    size?: number
    type?: string
    status?: string
    role?: string
    "date-from"?: string
    "date-to"?: string
}

export const fetchTransactions = async (filter: Ifilters) => {
    const response = await axiosInstance.get<TransactionsResponse>(
        "/manage/transactions",
        {
            params: filter,
        }
    )
    return response.data
}

export const fetchSingleTransaction = async ({
    id,
    ...detailed
}: {
    id: string
    detailed?: boolean
}) => {
    const response = await axiosInstance.get<SingleTrasactionResponse>(
        `/manage/transactions/${id}`,
        {
            params: detailed,
        }
    )
    return response.data
}
