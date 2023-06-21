import { setData } from '../lib/setData'
import { IUser } from '../types'

export const registerNewUser = async (id: string, data: IUser) => {
  await setData('users', id, data)
}
