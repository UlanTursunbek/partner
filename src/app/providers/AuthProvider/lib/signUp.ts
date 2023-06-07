import firebaseAuth from 'app/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null

  try {
    result = await createUserWithEmailAndPassword(firebaseAuth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}
