import { fireStore } from 'app/firebase/config'
import { doc, DocumentReference, setDoc } from 'firebase/firestore'

import { Collection } from '../types'

export const updateData = async <T>(
  collection: Collection,
  id: string,
  data: T
): Promise<void> => {
  const docRef = doc(fireStore, collection, id)

  await setDoc(docRef as DocumentReference<T>, data, { merge: true })
}
