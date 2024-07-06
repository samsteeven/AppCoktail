import { Outlet } from "react-router-dom"
import Header from "../components/admin/Header"

const AdminLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout
