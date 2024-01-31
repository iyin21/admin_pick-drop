export const customersData = [
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "active",
    },
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "active",
    },
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "pending approval",
    },
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "pending approval",
    },
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "pending approval",
    },
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "pending approval",
    },
    {
        customerId: "RW0001",
        firstName: "John",
        otherName: "Doe",
        email: "Johndoe@gmail.com",
        phoneNumber: "070123456789",
        location: "Ibadan",
        dateRegistered: "9/01/2024",
        status: "active",
    },
]

export const customerStatus = (role: string) => {
    switch (role) {
        case "pending approval":
            return <p className="text-[#FCB20D]">Pending</p>
        case "active":
            return <p className="text-[#44934D]">Active</p>
        case "inactive":
            return <p className="text-[#44934D]">Inactive</p>

        default:
            return <span>Unknown Role</span>
    }
}

export const unitGroupStatus = (role: boolean) => {
    switch (role) {
        case true:
            return <p className="text-[#44934D]">Active</p>
        case false:
            return <p className="text-[#44934D]">Inactive</p>

        default:
            return <span>Unknown Role</span>
    }
}

export const orderHistory = [
    {
        orderId: "IN23456",
        volume: "12kg",
        orderDate: "23/07/2023",
        payment: "NGN5678.34",
        paymentMethod: "Card",
        status:"Delivered"
    },
    {
        orderId: "IN23456",
        volume: "12kg",
        orderDate: "23/07/2023",
        payment: "NGN5678.34",
        paymentMethod: "Card",
        status:"Successful"
    },
    {
        orderId: "IN23456",
        volume: "12kg",
        orderDate: "23/07/2023",
        payment: "NGN5678.34",
        paymentMethod: "Pay on Delivery",
        status:"Successful"
    },
]
