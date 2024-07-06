
import Contact from '../pages/public/Contact'
import Services from '../pages/public/Services'
import Home from '../pages/public/Home'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Error from '../components/Error'
import Auth from '../components/Auth'

const PublicRoute = () => {
    return (
        <div>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/user/auth" element={<Auth />} />
                    <Route path="*" element={<Error />} />
                </Route>
                <Route />
            </Routes>
        </div>
    )
}

export default PublicRoute