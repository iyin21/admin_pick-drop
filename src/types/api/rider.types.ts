import { APIResponse } from "."

export type RidersResponse = APIResponse<Data>
export type SingleRiderResponse = APIResponse<Items>
export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    address: null
    city: null
    country: null
    created_at: Date
    date_of_appointment: Date
    department: null
    dob: null
    email: string
    firstname: string
    gender: string
    id: string
    id_number: string
    image_url: null
    is_active: boolean
    last_session: null
    last_trip_at: string
    lastname: string
    location: string
    othername: null
    phone: string
    privacy_policy_consent: boolean
    ratings: {
        average_rating: number
        total_reviews: number
    }
    role: string
    serial_number: string
    state: string
    status: string
    street: null
    terms_and_conditions_consent: boolean
    total_completed_trips: number
    vehicle_id: string
    updated_at: Date
}

export interface CreateRiderRequest {
    date_of_appointment: string
    email: string
    firstname: string
    id_number: string
    lastname: string
    phone: string
    state: string
    vehicle_id: string
}
