import { FunctionComponent } from "react"
import PublicRoute from './Routes/PublicRoute';
import AdminRoute from './Routes/AdminRoute';
import { Routes, Route } from "react-router-dom";
import AuthGuard from "./helpers/AuthGuard";


const App: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
        <Route path="/admin/*" element={<AuthGuard>
          <AdminRoute />
        </AuthGuard>} />
      </Routes>
    </>
  )
}

export default App
