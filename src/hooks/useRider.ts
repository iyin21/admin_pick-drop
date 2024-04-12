import { useQuery } from "@tanstack/react-query"
import { fetchRiders, fetchSingleRider  } from "@services/riders"

export const useRiders = ({
    status,
    detailed,
    page,
    size,
}: {
    detailed?: boolean
    page?: number
    size?: number
    status?: string
    
}) => {
    const result = useQuery({
        queryKey: ["riders", { status, detailed, page, size }],
        queryFn: () => fetchRiders({  detailed, page, size }),
    })
    return result
}

export const useSingleRider = ({
    detailed,
    
    id
}: {
    detailed?: boolean
   
    id: string
}) => {
    const result = useQuery({
        queryKey: ["singleRider", {  detailed, }],
        queryFn: () => fetchSingleRider({ detailed, id }),
    })
    return result
}
