import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import People from '@/components/People/People'
import { getPage, getSearch } from '@/utils/getParams'
import Layout from '@components/common/Layout'
const INIT_PAGE = 1
const LIMIT = 10

const Main = (): React.ReactNode => {
  const location = useLocation()
  const [page, setPage] = useState(getPage(location.search, INIT_PAGE))
  const [search, setSearch] = useState(getSearch(location.search))

  useEffect(() => {
    setPage(getPage(location.search, INIT_PAGE))
    setSearch(getSearch(location.search))
  }, [location.search])

  return (
    <Layout>
        <People page={page} limit={LIMIT} search={search} />
    </Layout>
  )
}

export default Main
