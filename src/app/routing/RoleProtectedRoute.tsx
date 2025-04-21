import { useAuth } from '../modules/auth'
import { Navigate } from 'react-router-dom'
import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
    allowedRoles: string[]
}

const RoleProtectedRoute: FC<Props> = ({ children, allowedRoles }) => {
    const { currentUser } = useAuth()

    if (!currentUser) {
        return <Navigate to='/auth' />
    }

    if (!allowedRoles.includes(currentUser.role)) {
        return <Navigate to='/error/403' /> // ou page d'erreur personnalisée
    }

    return <>{children}</>
}

export default RoleProtectedRoute
