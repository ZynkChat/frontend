import type { IUser } from './user'

export type SignUpPayload = {
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
}

export type SignInPayload = {
  username: string
  password: string
}

export type SignInResponse = {
  accessToken: string
  user: IUser
}

export type SignUpResponse = {
  user: IUser
}
