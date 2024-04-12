import { AxiosError } from "axios"

export interface APIResponse<T> {
    data: T
    message: string
    status: string
}
// export interface Data {
//     data: any
//     items: Items[]
//     page: number
//     page_size: number
//     total_items: number
//     total_pages: number
// }

export type Error = AxiosError<{ message: string }>
