import { Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/auth'

const RedirectByRole = () => {
    const { currentUser } = useAuth()

    if (!currentUser) {
        return <Navigate to='/auth/login' />
    }

    switch (currentUser.role) {
        case 'ROLE_ADMIN':
            return <Navigate to='/dashboard/admin' />
        case 'ROLE_VENDEUR':
            return <Navigate to='/dashboard/seller' />
        case 'ROLE_CLIENT':
            return <Navigate to='/dashboard/buyer' />
        default:
            return <Navigate to='/error/403' />
    }
}

export default RedirectByRole
