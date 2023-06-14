export enum ICollection {
  USERS = 'users'
}

export interface ICurrentUser {
  username: string
}

export interface IRegisterUser {
  username: string
  email: string
  password: string
}
