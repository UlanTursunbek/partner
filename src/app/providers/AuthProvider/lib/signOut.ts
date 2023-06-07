import firebaseAuth from 'app/firebase/config'
import { signOut } from 'firebase/auth'

export default async function Logout() {
  await signOut(firebaseAuth)
}
