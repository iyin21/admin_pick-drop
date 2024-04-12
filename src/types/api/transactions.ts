import { APIResponse } from "."

export type TransactionsResponse = APIResponse<Data>
export type SingleTrasactionResponse = APIResponse<Items>

export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    amount: number
    auth_url: string
    currency: string
    id: string
    method: string
    order: {
        VAT: number
        amount: number
        created_at: Date
        currency: string
        delivery_fee:number
        delivery_status: null
        id: string
        method: string
        serial_number: string
        status: string
        subtotal: number
        total: number
        updated_at: Date
    }
    serial_number: string
    status: string
    type: string
    updated_at: Date
}
