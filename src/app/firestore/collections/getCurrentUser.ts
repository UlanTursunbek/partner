import { doc, getDoc } from '@firebase/firestore'

import { usersCollection } from './collections'

export const getCurrentUser = async (id: string) => {
  const userDocRef = doc(usersCollection, id)
  const userDoc = await getDoc(userDocRef)
  const userData = userDoc.data()

  if (userData) {
    return { username: userData.username }
  }

  return {}
}
