import { getData } from '../lib/getData'

export const getCurrentUser = async (id: string) => {
  const userData = getData('users', id)

  return userData
}
