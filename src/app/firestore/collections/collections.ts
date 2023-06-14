import { createCollection } from 'app/firebase/config'

import { ICollection, ICurrentUser } from '../types'

export const usersCollection = createCollection<ICurrentUser>(ICollection.USERS)
