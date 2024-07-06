import React from 'react'

import { Navigate } from 'react-router-dom'
type props = {
    children: React.ReactNode
}
const AuthGuard: React.FC<props> = ({children}) => {
const test = false;

if (!test) return <Navigate to="auth" />

return children
}

export default AuthGuard
