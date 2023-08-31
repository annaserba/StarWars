export interface IPerson {
  name?: string
  height?: string
  mass?: string
  hair_color?: string
  skin_color?: string
  eye_color?: string
  birth_year?: string
  gender?: string
  homeworld?: string
  films?: string[]
  species?: string[]
  vehicles?: string[]
  starships?: string[]
  created?: Date
  edited?: Date
  url?: string
}

export interface IGenericResponse {
  status: string
  message: string
}

export interface IPeopleResponse {
  status: string
  next?: string
  previous?: string
  count: number
  results: IPerson[]
}

export interface IPage {
  page: number
  limit: number
  search?: string
}
