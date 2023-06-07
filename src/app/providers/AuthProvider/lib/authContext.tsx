import { createContext } from 'react'

interface UserType {
  email: string | null
  uid: string | null
}

export const AuthContext = createContext<{ user: UserType | null }>({
  user: null
})
