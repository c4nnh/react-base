import { MutationFunction, useMutation } from '@tanstack/react-query'
import { LoginPayload, LoginResponse } from '../../models'
import { authRequest } from '../request'
import { MutationOptions } from '../type'

type Response = {
  login: LoginResponse
}

type Variables = {
  login: LoginPayload
}

type API = {
  login: MutationFunction<Response['login'], Variables['login']>
}

const auth: API = {
  login: data => authRequest.post('login', data),
}

export const useLoginMutation = (
  options?: MutationOptions<Response['login'], Variables['login']>
) => useMutation(['login'], auth.login, options)
