import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import firebase_app from 'app/firebase/config'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

interface AuthContextProviderProps {
  children: ReactNode
}

interface UserType {
  email: string | null
  uid: string | null
}

const auth = getAuth(firebase_app)

export const AuthContext = createContext<{ user: UserType | null }>({
  user: null
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
