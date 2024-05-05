import { APIResponse } from "."

export type TripsResponse = APIResponse<Data>
export type SingleTripResponse = APIResponse<Items>
export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    created_at: string
    delivery_address: string
    delivery_id: string
    delivery_status: string
    order_total: number
    serial_number: string
    status: string
}
