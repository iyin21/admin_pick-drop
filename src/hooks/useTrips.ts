import { useQuery } from "@tanstack/react-query"
import { fetchTrips } from "@services/trips"

export const useTrips = ({
    detailed,
    page,
    size,
    id
}: {
    detailed?: boolean
    page?: number
    size?: number,
    id: string
}) => {
    const result = useQuery({
        queryKey: ["trips", { detailed, page, size, id }],
        queryFn: () => fetchTrips({ detailed, page, size, id }),
    })
    return result
}
