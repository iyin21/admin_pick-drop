import DashboardIcon from "../assets/dashboard"
import CustomersIcon from "../assets/customers"
import InvoiceHistoryIcon from "../assets/invoiceHistory"
import OrdersIcon from "../assets/orders"
import balanceWithdrawalIcon from "../assets/balanceWithdrawal"
import UserManagementIcon from "../assets/userManagement"
import SettingsIcon from "../assets/settings"
import ContactsIcon from "../assets/contacts"

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
        name: "User Management",
        Icon: UserManagementIcon,
        link: "/user-management",
    },
    
    
]
