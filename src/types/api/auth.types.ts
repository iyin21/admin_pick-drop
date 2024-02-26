export interface SigninRequest {
    email: string
    password: string
}

export interface SignInResponse {
    data: User
    message: string
    status: string
    token: string
}

export interface User{
    city: null
    company_name: null
    department: null
    firstname: string
    id: string
    id_number: string
    is_active: boolean
    lastname: string
    role: string
    serial_number:  string
    setup_completed: boolean
    status: string
}