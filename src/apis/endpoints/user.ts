import { QueryFunction, useQuery } from '@tanstack/react-query'
import { User, UserParams } from '../../models'
import { request } from '../request'
import { QueryOptions } from '../type'

type Response = {
  get: User[]
}

type QueryKeys = {
  get: ['getUsers', UserParams]
}

type API = {
  get: QueryFunction<Response['get'], QueryKeys['get']>
}

const PREFIX = 'users'

const user: API = {
  get: params => request.get(PREFIX, { params }),
}

export const useGetUsersQuery = (
  params: UserParams,
  options?: QueryOptions<Response['get'], QueryKeys['get']>
) => useQuery(['getUsers', params], user.get, options)
