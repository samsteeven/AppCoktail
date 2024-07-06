import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layouts/AdminLayout"
import Dashboard from "../pages/admin/Dashboard"
import Error from "../components/Error"
import Auth from "../components/Auth"


const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="auth" element={<Auth user="admin" />} />
                    <Route path="dashboard" element={<Dashboard />} />  
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </div>
    )
}

export default AdminRoute
