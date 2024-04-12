import axiosInstance from "./api.services"
import { ProductsResponse, CreateProductRequest, SingleProductResponse } from "../types/api/products.types"

interface IFilters {
    detailed?: boolean
    page?: number|string
    size?: number
    all?: boolean
}
export const fetchProducts = (filters: IFilters) =>
    axiosInstance.get<ProductsResponse>("/manage/products", {
        params: filters,
    })

export const fetchSingleProduct = ({id, ...detailed}:{id:string, detailed?:boolean}) =>
    axiosInstance.get<SingleProductResponse>(`/manage/products/${id}`, {
        params: detailed,
    })

export const createProduct = (data: CreateProductRequest) => {
    return axiosInstance.post<SingleProductResponse>("/manage/products", data)
}

export const publishProduct = (id: string) => {
    return axiosInstance.put<SingleProductResponse>(`/manage/products/${id}/publish`,)
}
export const unpublishProduct = (id: string) => {
    return axiosInstance.put<SingleProductResponse>(`/manage/products/${id}/unpublish`)
}

