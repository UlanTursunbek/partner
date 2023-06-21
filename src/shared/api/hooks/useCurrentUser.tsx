import { useEffect, useState } from 'react'
import { getCurrentUser } from 'app/firestore/hooks'
import { useAuth } from 'app/providers/AuthProvider'
import { DocumentData } from 'firebase/firestore'

export const useCurrentUser = () => {
  const { user } = useAuth()

  const [currentUser, setCurrentUser] = useState<DocumentData>()
  // // @TODO rework this api call
  useEffect(() => {
    if (user) {
      const getUser = async () => {
        const userData = await getCurrentUser(user.uid)
        if (userData) {
          setCurrentUser(userData)
        }
      }
      getUser()
    }
  }, [user])

  return currentUser
}
