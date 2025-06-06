import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token` 
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
// export function login(username: string, password: string) {
//   return axios.post<AuthModel>(LOGIN_URL, {
//     username,
//     password,
//   })
// }

export async function login(username: string, password: string) {
  const response = await axios.post(LOGIN_URL, {
    username,
    password,
  })
  return response.data // 👈 on retourne directement la data utile
}

// Server should return AuthModel
export function register(
  username: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    username,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    access_token: token,
  })
}
