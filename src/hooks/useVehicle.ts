import { useQuery } from "@tanstack/react-query"
import { fetchVehicles } from "@services/vehicle"

export const useVehicles = ({
    detailed,
    page,
    size,
    status,
    
}: {
    detailed?: boolean
    page?: number
    size?: number
    status?: string
    
    
}) => {
    const result = useQuery({
        queryKey: ["vehicles", { status, detailed, page, size,  }],
        queryFn: () => fetchVehicles({  detailed, page, size,  }),
    })
    return result
}
