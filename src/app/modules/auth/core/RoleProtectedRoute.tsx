import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../core/Auth'

type Props = {
    children: JSX.Element
    allowedRoles: string[]
}

const RoleProtectedRoute: React.FC<Props> = ({ children, allowedRoles }) => {
    const { currentUser } = useAuth()

    if (!currentUser) return <Navigate to='/auth' />

    if (!allowedRoles.includes(currentUser.role)) {
        return <Navigate to='/' />
    }

    return children
}

export default RoleProtectedRoute
