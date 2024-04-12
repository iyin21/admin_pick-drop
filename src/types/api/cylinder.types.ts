import { APIResponse } from "."

export type CylinderResponse = APIResponse<Data>

export interface Data {
    items: Items[]
    page: number
    page_size: number
    total_items: number
    total_pages: number
}

export interface Items {
    dry_weight: number
    location: string
    owner_name: string
    serial_number: string
    status: string
    tracking: {
        created_at: Date
        cylinder_sn: string
        id: string
        is_verified: false
        location: string
        service_person_name: string
        status: string
        updated_at: Date
    }
    weight: number
}

export interface CreateCylinderRequest {
    dry_weight: number
    owner_id?: string
    weight:number
}
