import { APIResponse } from "."

export type ProductsResponse = APIResponse<Data>
export interface SingleProductResponse {
    message: string
    product: Items
    status: boolean
}
export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    description: string
    id: string
    image: string
    is_published: true
    name: string
    price: number
    serial_number: string
    weight: number
}

export interface CreateProductRequest {
    description: string
    image: string
    name: string
    price: number
}
