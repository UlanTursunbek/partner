import { fireStore } from 'app/firebase/config'
import { doc, getDoc } from 'firebase/firestore'

import { Collection } from '../types'

export const getData = async (collection: Collection, id: string) => {
  const docRef = doc(fireStore, collection, id)
  const docSnap = await getDoc(docRef)
  const docData = docSnap.data()

  if (docData) return docData

  return
}
