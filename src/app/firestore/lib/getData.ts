import { firebaseDB } from 'app/firebase/config'
import { doc, getDoc } from 'firebase/firestore'

import { ICollection } from './types'

export default async function getData(collection: ICollection, id: string) {
  let docRef = doc(firebaseDB, collection, id)

  let result = null
  let error = null

  try {
    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
      result = docSnapshot.data()
    }
  } catch (e) {
    error = e
  }

  return { result, error }
}
