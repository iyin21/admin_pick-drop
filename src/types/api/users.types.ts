import { APIResponse } from "."

export type UsersResponse = APIResponse<Data>
export type SingleUserResponse = APIResponse<Items>

export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    address: string
    city: string
    country: string
    created_at: Date
    date_of_appointment: string
    department: string
    dob: string
    email: string
    firstname: string
    othername: string
    gender: string
    house_number: string
    id: string
    id_number: number
    is_active: boolean
    last_session: string
    location: string
    lastname: string
    phone: string
    ratings: {
        average_rating: number
        total_reviews: number
    }
    role: string
    serial_number: string
    state: null
    status: string
    street: string
    total_completed_trips: number
    vehicle_id: string
    terms_and_conditions_consent: boolean
    updated_at: Date
}

export interface DeactivateUserResponse {
    data: {
        agent_name: string
        city: null
        company_name: null
        department: null
        firstname: string
        id: string
        id_number: null
        is_active: false
        lastname: string
        meter_type: string
        role: string
        serial_number: string
        setup_completed: true
        status: string
    }
    message: string
    status: string
}