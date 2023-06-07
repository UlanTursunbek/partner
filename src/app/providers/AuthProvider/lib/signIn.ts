import firebaseAuth from 'app/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null
  try {
    result = await signInWithEmailAndPassword(firebaseAuth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}
