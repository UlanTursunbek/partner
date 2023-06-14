import { doc, setDoc } from '@firebase/firestore'

import { IRegisterUser } from '../types'

import { usersCollection } from './collections'

export const registerNewUser = async (id: string, data: IRegisterUser) => {
  const userRef = doc(usersCollection, id)
  await setDoc(userRef, data)
}
