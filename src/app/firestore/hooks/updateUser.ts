import { updateData } from 'app/firestore/lib/updateData'

import { IUser } from '../types'

export const updateUser = async (id: string, data: Partial<IUser>) => {
  await updateData('users', id, data)
}
