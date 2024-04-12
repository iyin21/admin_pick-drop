import { APIResponse } from "."

export type VehicleResponse = APIResponse<Data>
export type SingleVehicleResponse = APIResponse<Items>

export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    created_at: Date
    id: string
    rider: {
        city: null
        created_at: Date
        email: string
        firstname: string
        house_number: null
        id: string
        image_url: null
        is_active: boolean
        lastname:string
        phone: string
        ratings: {
            average_rating: number
            total_reviews: number
        }
        role:string
        serial_number: string
        state:string
        status: string
        street: null
        total_completed_trips: number
        vehicle_id:string
    }
    rider_name: string
    serial_number:string
    type: string
    updated_at: Date
    vehicle_id: string
}
