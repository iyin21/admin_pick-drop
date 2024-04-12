import { APIResponse } from "."

export type OrdersResponse = APIResponse<Data>
export type SingleOrderResponse = APIResponse<Items>

export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    VAT: number
    amount: number
    created_at: string
    currency: string
    delivery: {
        city_state: string
        created_at: Date
        fee: number
        house_number: string
        id: string
        landmark: string
        status: string
        updated_at: Date
    }
    delivery_fee: number
    delivery_status: string
    id: string
    items: Items2[]
    method: string
    recipient: {
        address: string
        name: string
        phone: string
    }
    sender: {
        address: string
        name: string
        phone: string
    }
    serial_number: string
    status: string
    subtotal: number
    total: number
    total_weight: number
    transaction: {
        account_name: string
        account_number: string
        amount: number
        auth_url: string
        bank_name: string
        currency: string
        id: string
        method: string
        reference: string
        serial_number: string
        status: string
        total_order_gas_weight: number
        type: string
    }
    transaction_fee: number
    updated_at: Date
    user: {
        city: string
        created_at: Date
        email: string
        firstname: string
        id: string
        is_active: boolean
        lastname: string
        phone: null
        role: string
        serial_number: string
        state: null
        status: string
    }
}

export interface Items2 {
    created_at: Date
    id: string
    product: {
        id: string
        price: number
        serial_number: string
        weight: number
    }
    quantity: number
    total: number
    unit_price: number
}
