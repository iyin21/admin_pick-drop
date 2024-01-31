import { AxiosError } from "axios"

export interface APIResponse<T> {
    data: T
    message: string
    status: string
}
export interface Data {
    data: any
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}
export interface Data2 {
    address: string
    agent: {
        city: null
        company_name: string
        department: null
        firstname: string
        id: string
        id_number: null
        is_active: boolean
        lastname: string
        role: string
        serial_number: string
        setup_completed: boolean
        status: string
    }
    cac_doc: null
    cac_number: null
    city: string | null
    company_logo: null
    company_name: string | null
    country: string
    created_at: string
    created_by: {
        city: null
        company_name: string
        department: null
        firstname: string
        id: string
        id_number: null
        is_active: boolean
        lastname: string
        role: string
        serial_number: string
        setup_completed: boolean
        status: string
    }
    date_of_appointment: string
    department: string
    dob: Date
    email: string
    firstname: string
    gender: string
    id: string
    id_number: null
    image: string
    is_active: boolean
    last_session: null
    last_updated_by: null
    lastname: string
    license: string
    meter: {
        created_at: Date
        is_validated: boolean
        meter_number: string
        sim_number: string
        sim_serial: string
        type: string
        uid: string
        updated_at: Date
    }
    nature_of_business: string
    operational_license: string
    othername: string
    phone: string
    role: string
    serial_number: string
    setup_completed: boolean
    status: string
    state: string
    category: string
    unitgroup: {
        address: string
        category: string
        city: null
        country: string
        id: string
        is_active: boolean
        name: string
        state: string
        subscription: {
            max_number_of_meters: null
            name: string
            volume_in_kg: null
        }
        total_customers: number
    }
    updated_at: Date
}
export interface Items {
    address: string
    agent: {
        city: null
        company_name: string
        department: null
        firstname: string
        id: string
        id_number: null
        is_active: boolean
        lastname: string
        role: string
        serial_number: string
        setup_completed: boolean
        status: string
    }
    cac_doc: null
    cac_number: null
    city: string | null
    company_logo: null
    company_name: string | null
    country: string
    created_at: string
    created_by: {
        city: null
        company_name: string
        department: null
        firstname: string
        id: string
        id_number: null
        is_active: boolean
        lastname: string
        role: string
        serial_number: string
        setup_completed: boolean
        status: string
    }
    date_of_appointment: string
    department: string
    dob: Date
    email: string
    firstname: string
    gender: string
    id: string
    id_number: null
    image: string
    is_active: boolean
    last_session: null
    last_updated_by: null
    lastname: string
    license: string
    meter: {
        created_at: Date
        is_validated: boolean
        meter_number: string
        sim_number: string
        sim_serial: string
        type: string
        uid: string
        updated_at: Date
    }
    nature_of_business: string
    operational_license: string
    othername: string
    phone: string
    role: string
    serial_number: string
    setup_completed: boolean
    status: string
    state: string
    category: string
    unitgroup: {
        address: string
        category: string
        city: null
        country: string
        id: string
        is_active: boolean
        name: string
        state: string
        subscription: {
            max_number_of_meters: null
            name: string
            volume_in_kg: null
        }
        total_customers: number
    }
    updated_at: Date
}

export type MeterTypeResponse = APIResponse<Meter>
export type GuageTypeResponse = APIResponse<Meter>

interface Meter {
    items: string[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}
export type AgentStatsResponse = APIResponse<Data3>
export type UnitGroupPackageResponse = APIResponse<Data4[]>

interface Data3 {
    total_active_customers: number
    total_inactive_customers: number
    total_unitgroups: number
}
interface Data4 {
    max_number_of_meters: number
    name: string
    skid_in_kg: number
}
export type Error = AxiosError<{ message: string }>
