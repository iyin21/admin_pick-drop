import { useQuery } from "@tanstack/react-query"
import { fetchProducts, fetchSingleProduct, } from "@services/products"

export const useProducts = ({
    detailed,
    page,
    size,
    status,
    all
}: {
    detailed?: boolean
    page?: number
    size?: number
    status?: string
    all?: boolean
    
}) => {
    const result = useQuery({
        queryKey: ["products", { status, detailed, page, size, all }],
        queryFn: () => fetchProducts({  detailed, page, size, all }),
    })
    return result
}

export const useSingleProduct = ({
    detailed,
    
    id
}: {
    detailed?: boolean
   
    id: string
}) => {
    const result = useQuery({
        queryKey: ["singleProduct", {  detailed, }],
        queryFn: () => fetchSingleProduct({ detailed, id }),
    })
    return result
}

