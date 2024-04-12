import { useQuery } from "@tanstack/react-query"
import {
    fetchTransactions,
    fetchSingleTransaction,
} from "@services/transaction"

export const useTransactions = ({
    detailed,
    page,
    size,
    dateFrom,
    dateTo,
    status,
    role,
    type,
}: {
    detailed?: boolean
    page?: number
    size?: number
    status?: string
    dateFrom?: string
    dateTo?: string
    role?: string
    type?: string
}) => {
    const result = useQuery({
        queryKey: [
            "transactions",
            { status, detailed, page, size, dateFrom, dateTo , role, type},
        ],
        queryFn: () =>
            fetchTransactions({
                status,
                detailed,
                page,
                size,
                "date-from": dateFrom,
                "date-to": dateTo,
                role,
                type
            }),
    })
    return result
}

export const useSingleTransaction = ({
    detailed,
    id,
}: {
    detailed?: boolean
    id: string
}) => {
    const result = useQuery({
        queryKey: ["singleTransaction", { detailed }],
        queryFn: () => fetchSingleTransaction({ detailed, id }),
    })
    return result
}
