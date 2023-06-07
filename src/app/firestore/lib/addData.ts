import { firebaseDB } from 'app/firebase/config'
import { doc, setDoc } from 'firebase/firestore'

import { ICollection } from './types'

export default async function addData(
  collection: ICollection,
  id: string,
  data: any
) {
  let result = null
  let error = null

  try {
    result = await setDoc(doc(firebaseDB, collection, id), data, {
      merge: true
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}
