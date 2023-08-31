import 'react-toastify/dist/ReactToastify.css'
import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getPeople } from '@api/peopleApi'
import NProgress from 'nprogress'
import type { IPeopleResponse, IPage } from '@/api/types'

export const usePeople = ({ page, limit, search }: IPage): UseQueryResult<IPeopleResponse, Error> => {
  return useQuery({
    queryKey: ['getPeople', page, limit, search],
    queryFn: async () => await getPeople({ page, limit, search }),
    staleTime: 5 * 1000,
    onSuccess () {
      NProgress.done()
    },
    onError (error: Error) {
      const resMessage = error.toString()
      toast(resMessage, {
        type: 'error',
        position: 'top-right'
      })
      NProgress.done()
    }
  })
}
