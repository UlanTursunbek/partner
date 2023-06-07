import { useContext } from 'react'

import { AuthContext } from './authContext'
import signIn from './signIn'
import Logout from './signOut'
import signUp from './signUp'

export const useAuth = () => {
  const useAuthContext = () => useContext(AuthContext)
  const user = useAuthContext()

  return { user, signIn, signUp, Logout }
}
