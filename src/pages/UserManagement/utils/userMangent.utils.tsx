
export const usersData=[
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Administration",
        role: "Super Admin",
        email: "Johndoe@gmail.com",
        
        status: true
    },
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Engineering",
        role: "Technician",
        email: "Johndoe@gmail.com",
        
        status: true
    },
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Administration",
        role: "Marketing",
        email: "Johndoe@gmail.com",
        
        status: true
    },
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Administration",
        role: "Legal",
        email: "Johndoe@gmail.com",
        
        status: true
    },
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Administration",
        role: "Super Admin",
        email: "Johndoe@gmail.com",
        
        status: true
    },
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Administration",
        role: "Super Admin",
        email: "Johndoe@gmail.com",
        
        status: true
    },
    {
        customerId:"RW0001",
        name: "John Doe",
        department: "Administration",
        role: "Super Admin",
        email: "Johndoe@gmail.com",
        
        status: true
    },
]

export const userStatus = (role: boolean ) => {
    switch (role) {
        case false:
            return (
                    <p className="text-[#FCB20D]">Pending</p>
                
            )
        case true:
            return (
                <p className="text-[#6EBC77]">Online</p>
            )
        
        
        default:
            return <span>Unknown Role</span>
    }
}