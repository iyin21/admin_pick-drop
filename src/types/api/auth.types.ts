export interface SigninRequest {
    email: string
    password: string
}

export interface SignInResponse {
    data: User
    message: string
    status: boolean
    token: string
}

export interface User{
    city: null
    created_at: string
    email: string
    firstname: string
    id: string
    phone: string
    is_active: boolean
    lastname: string
    role: string
    serial_number:  string
    state: null
    status: string
}