import DashboardIcon from "../assets/dashboard"
import CustomersIcon from "../assets/customers"
import InvoiceHistoryIcon from "../assets/invoiceHistory"
import OrdersIcon from "../assets/orders"
import balanceWithdrawalIcon from "../assets/balanceWithdrawal"
import ProductsIcon from "../assets/userManagement"
import RidersIcon from "../assets/userManagement"
import UserManagementIcon from "../assets/userManagement"


export const routes = [
    { name: "Dashboard", Icon: DashboardIcon, link: "/dashboard" },
    {
        name: "Customers",
        Icon: CustomersIcon,
        link: "/customers",
    },
    {
        name: "Orders",
        Icon: OrdersIcon,
        link: "/orders",
    },
    {
        name: "Invoice History",
        Icon: InvoiceHistoryIcon,
        link: "/invoice-history",
    },
    {
        name: "Cylinder Tracking",
        Icon: balanceWithdrawalIcon,
        link: "/cylinder-tracking",
    },
    {
        name: "Products",
        Icon: ProductsIcon,
        link: "/products",
    },
    {
        name: "Riders",
        Icon: RidersIcon,
        link: "/riders",
    },
    {
        name: "User Management",
        Icon: UserManagementIcon,
        link: "/user-management",
    },
    
    
]
