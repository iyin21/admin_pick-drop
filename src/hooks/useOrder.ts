import { useQuery } from "@tanstack/react-query"
import { fetchOrders, fetchSingleOrder } from "@services/order"

export const useOrders = ({
    detailed,
    page,
    size,
    dateFrom,
    dateTo,
    status,
}: {
    detailed?: boolean
    page?: number| string
    size?: number
    status?: string
    dateFrom?: string
    dateTo?: string
}) => {
    const result = useQuery({
        queryKey: [
            "orders",
            { status, detailed, page, size, dateFrom, dateTo },
        ],
        queryFn: () =>
            fetchOrders({
                status,
                detailed,
                page,
                size,
                "date-from": dateFrom,
                "date-to": dateTo,
            }),
    })
    return result
}

export const useUserOrders = ({
    detailed,
    id,
}: {
    detailed?: boolean
    id: string
}) => {
    const result = useQuery({
        queryKey: ["userOrder", { detailed }],
        queryFn: () => fetchSingleOrder({ detailed, id }),
    })
    return result
}
