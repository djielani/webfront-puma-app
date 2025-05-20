import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import {AuthModel, UserModel} from './_models'
import * as authHelper from './AuthHelpers'
import {getUserByToken} from './_requests'
import {WithChildren} from '../../../../_metronic/helpers'


type AuthContextProps = {
  auth: any
  saveAuth: (auth : any) => void
  currentUser: UserModel | undefined
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
  const saveAuth = (auth: undefined) => {
    console.log('Auth***', auth)

    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      authHelper.removeAuth()
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
  }

  return (
    <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({children}) => {
  const {auth, logout, setCurrentUser} = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    const requestUser = async (apiToken: string) => {
      try {
        console.log('apiToken', apiToken)
        if (!didRequest.current) {
          const {data} = await getUserByToken(apiToken)
          console.log('data', data)
          if (data) {
            setCurrentUser(data)

            // 🎯 Redirection selon le rôle ici
            switch (data.role) {
              case 'ROLE_ADMIN':
                window.location.href = '/dashboard/admin'
                break
              case 'ROLE_VENDEUR':
                window.location.href = '/dashboard/seller'
                break
              case 'ROLE_CLIENT':
                window.location.href = '/dashboard/buyer'
                break
              default:
                window.location.href = '/'
            }
          }
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          logout()
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (auth?.data?.access_token) {
      // requestUser(auth)
      localStorage.setItem('access_token', auth.data.access_token)
      requestUser(auth.data.access_token)

            // 🎯 Redirection selon le rôle ici
            switch (auth?.data?.roles) {
              case 'ROLE_ADMIN':
                window.location.href = '/dashboard/admin'
                break
              case 'ROLE_VENDEUR':
                window.location.href = '/dashboard/seller'
                break
              case 'ROLE_CLIENT':
                window.location.href = '/dashboard/buyer'
                break
              default:
                window.location.href = '/'
            }
    } else {
      logout()
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}


export {AuthProvider, AuthInit, useAuth}
