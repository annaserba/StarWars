import axios from 'axios'
import type { IPage, IPeopleResponse } from './types'

const BASE_URL = 'https://swapi.dev/api/'

export const personApi = axios.create({
  baseURL: BASE_URL
})

export const getPeople: (page: IPage) => Promise<IPeopleResponse> = async ({ page = 1, limit = 10, search }: IPage) => {
  let params = `people?page=${page}&limit=${limit}`

  if (search !== '') {
    params += `&search=${search}`
  }
  const response = await personApi.get<IPeopleResponse>(params)
  return response.data
}
