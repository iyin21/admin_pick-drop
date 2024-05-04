import { useQuery } from "@tanstack/react-query"
import { fetchUsers, fetchSingleUser, fetchStaffs } from "@services/users"
import { fetchUserOrders } from "@services/order"

export const useUsers = ({
    role,
    status,
    page,
    size,
}: {
    role?: string
    status?: string
    page?: number
    size?: number
}) => {
    const result = useQuery({
        queryKey: ["users", { role, status, page, size }],
        queryFn: () => fetchUsers({ role, status, page, size }),
    })
    return result
}

export const useStaffs = ({
    detailed,
    status,
    page,
    size,
}: {
    detailed?: string
    status?: string
    page?: number
    size?: number
}) => {
    const result = useQuery({
        queryKey: ["staffs", { detailed, status, page, size }],
        queryFn: () => fetchStaffs({ detailed, status, page, size }),
    })
    return result
}

export const useSingleUser = ({
    detailed,
    id,
}: {
    detailed?: boolean
    id: string
}) => {
    const result = useQuery({
        queryKey: ["singleUser", { detailed }],
        queryFn: () => fetchSingleUser({ detailed, id }),
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
        queryKey: ["orders", { detailed }],
        queryFn: () => fetchUserOrders({ detailed, id }),
    })
    return result
}