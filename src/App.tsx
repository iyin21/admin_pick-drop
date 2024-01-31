import { Route, Routes, Navigate } from "react-router-dom"
import Signin from "@pages/auth/signin"
import Dashboard from "@pages/Dashboard"
import InvoiceHistory from "@pages/InvoiceHistory"
import Customers from "@pages/Customers"
import CustomerDetails from "@pages/CustomerDetails"
import CylinderTracking from "@pages/CylinderTracking"
import UserManagement from "@pages/UserManagement"
import Orders from "@pages/Orders"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoice-history" element={<InvoiceHistory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/Customer/id" element={<CustomerDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Cylinder-tracking" element={<CylinderTracking />} />
        <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  )
}

export default App
