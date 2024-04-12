import { Route, Routes, Navigate } from "react-router-dom"
import Signin from "@pages/auth/signin"
import Dashboard from "@pages/Dashboard"
import InvoiceHistory from "@pages/InvoiceHistory"
import Customers from "@pages/Customers"
import CustomerDetails from "@pages/CustomerDetails"
import CylinderTracking from "@pages/CylinderTracking"
import UserManagement from "@pages/UserManagement"
import Orders from "@pages/Orders"
import Products from "@pages/Products"
import Rider from "@pages/Riders"
import RiderDetails from "@pages/RiderDetails"
import ProductDetails from "@pages/ProductDetails"
import RequireAuth from "@pages/auth/require-auth"
import AuthRoutes from "@pages/auth/auth-routes"
import '@mantine/dates/styles.css';
function App() {

  return (
    <Routes>
      <Route element={<AuthRoutes />}>
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        </Route>
        <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/invoice-history" element={<InvoiceHistory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/Customer/:id" element={<CustomerDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Cylinder-tracking" element={<CylinderTracking />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/products" element={<Products />} />
        <Route path="/riders" element={<Rider />} />
        <Route path="/rider/:id" element={<RiderDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App
