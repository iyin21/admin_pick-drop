import { useQuery } from "@tanstack/react-query"
import { fetchCylinder } from "@services/cylinder"

export const useCylinders = ({
    detailed,
    page,
    size,
}: {
    detailed?: boolean
    page?: number
    size?: number
}) => {
    const result = useQuery({
        queryKey: ["cylinder", { detailed, page, size }],
        queryFn: () => fetchCylinder({ detailed, page, size }),
    })
    return result
}
