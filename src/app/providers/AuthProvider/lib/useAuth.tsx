import firebaseAuth from 'app/firebase/config'

import signIn from './signIn'
import Logout from './signOut'
import signUp from './signUp'

export const useAuth = () => {
  const user = firebaseAuth.currentUser

  return { user, signIn, signUp, Logout }
}
