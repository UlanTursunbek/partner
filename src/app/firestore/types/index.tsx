export type Collection = 'users'

export interface IUser {
  username: string
  datingStart?: number | undefined
  id: string
  email: string
  password: string
}
