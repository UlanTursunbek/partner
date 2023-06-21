import { doc, setDoc } from '@firebase/firestore'
import { fireStore } from 'app/firebase/config'
import { DocumentReference, WithFieldValue } from 'firebase/firestore'

import { Collection } from '../types'

export const setData = async <T>(
  collection: Collection,
  id: string,
  data: WithFieldValue<T>
): Promise<void> => {
  const docRef = doc(fireStore, collection, id)
  await setDoc(docRef as DocumentReference<T>, data)
}
