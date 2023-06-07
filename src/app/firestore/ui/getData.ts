import firebase_app from 'app/firebase/config'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const db = getFirestore(firebase_app)

export default async function getData(collection: string, id: string) {
  let docRef = doc(db, collection, id)

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
