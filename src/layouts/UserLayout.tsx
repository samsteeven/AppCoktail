import Header from "../components/public/Header"
import { Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default UserLayout
