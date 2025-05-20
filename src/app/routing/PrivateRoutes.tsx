import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import DashboardAdmin from '../pages/dashboard/Admin'
import DashboardSeller from '../pages/dashboard/Seller'
import DashboardBuyer from '../pages/dashboard/Buyer'
import RoleProtectedRoute from './RoleProtectedRoute'
import RedirectByRole from '../pages/dashboard/RedirectByRole'
import Produits from '../pages/produit/Produits'
import { UsersList } from '../modules/profile/components/UsersList'
import ShowUser from '../pages/user/ShowUser'
import AddUser from '../pages/user/AddUser'
import Formation from '../pages/formation/Formation'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirection vers le dashboard après login */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />

        {/* Redirection dynamique en fonction du rôle */}
        <Route path='dashboard' element={<RedirectByRole />} />

        {/* Dashboards par rôle */}
        <Route
          path='dashboard/admin'
          element={
            <RoleProtectedRoute allowedRoles={['ROLE_ADMIN']}>
              <DashboardAdmin />
            </RoleProtectedRoute>
          }
        />
        <Route
          path='dashboard/seller'
          element={
            <RoleProtectedRoute allowedRoles={['ROLE_VENDEUR']}>
              <DashboardSeller />
            </RoleProtectedRoute>
          }
        />
        <Route
          path='dashboard/buyer'
          element={
            <RoleProtectedRoute allowedRoles={['ROLE_CLIENT']}>
              <DashboardBuyer />
            </RoleProtectedRoute>
          }
        />

        {/* Autres pages */}
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='produits' element={<Produits/>} />

        {/* Users */}
        <Route path='users' element={<ShowUser/>} />
        <Route path='users/add' element={<AddUser/>} />
          {/* Formations */}
        <Route path='formations' element={<Formation/>} />
        {/* Modules Lazy loadés */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        {/* Page 404 */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
