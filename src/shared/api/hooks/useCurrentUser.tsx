import { useEffect, useState } from 'react'
import { getCurrentUser } from 'app/firestore/collections'
import { ICurrentUser } from 'app/firestore/types'
import { useAuth } from 'app/providers/AuthProvider'

export const useCurrentUser = () => {
  const { user } = useAuth()

  const [currentUser, setCurrentUser] = useState<ICurrentUser>({ username: '' })
  // // @TODO rework this api call
  useEffect(() => {
    if (user) {
      const getUser = async () => {
        const { username } = await getCurrentUser(user.uid)
        if (username) {
          setCurrentUser({ username })
        }
      }
      getUser()
    }
  }, [user])

  return currentUser
}
