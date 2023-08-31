import React, { useEffect, useMemo } from 'react'
import { usePeople } from '@/hooks/usePeople'
import type { IPerson } from '@api/types'
import { useNavigate } from 'react-router-dom'
import { Pagination, PaginationItem, Grid } from '@mui/material'
import NProgress from 'nprogress'
import Box from '@mui/material/Box'
import Search from '@/components/common/Search/Search'
import PersonTile from '@/components/People/components/PersonTile'

interface PeopleProps {
  page: number
  limit: number
  search?: string
}

function People (props: PeopleProps): React.ReactNode {
  const { page, limit, search } = props
  const { data, isLoading, isFetching } = usePeople({ page, limit, search })
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading || isFetching) {
      NProgress.start()
    } else {
      NProgress.done()
    }

    return () => {
      NProgress.done()
    }
  }, [isLoading, isFetching])

  const handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void = (event, value) => {
    navigate(`?page=${value}${search !== '' ? `&search=${search}` : ''}`)
  }

  const handleSearch: (newSearch: string) => void = (newSearch) => {
    navigate(`?search=${newSearch}`)
  }

  const handleClear: () => void = () => {
    navigate('')
  }

  const renderedPagination = useMemo(() => {
    if (data == null || data.count === 0) {
      return null
    }
    const pageCount: number = Math.ceil(data.count / limit)

    return (
      <Pagination
        count = {pageCount}
        page = {page}
        hideNextButton = { data?.next === '' }
        hidePrevButton = { data?.previous === '' }
        onChange = {handlePageChange}
        renderItem = {(item) => (
          <PaginationItem component='div' {...item} />
        )}
      />
    )
  }, [page, data])

  const renderedSearch = useMemo(() => (
    <Box sx={{ m: '0 0 24px' }}>
      <Search
        value = { search }
        onClear = { handleClear }
        onSearch = { handleSearch }
      />
    </Box>
  ), [search])

  const renderSkeleton = <Grid item xs={12} sm={6}>
      <PersonTile loading />
    </Grid>

  const renderResultSkeletons = <>
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
    {renderSkeleton}
  </>

  const renderedResults = useMemo(() => (
     <Box sx={{ flexGrow: 1, m: '0 0 24px' }}>
      <Grid container spacing={2}>
        {data?.results === null && renderResultSkeletons}
        {data?.results?.map((person: IPerson) => (
          <Grid item key={person.name} xs={12} sm={6}>
            <PersonTile
              person = {person}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ), [data])

  return (
    <>
      {renderedSearch}
      {renderedResults}
      {renderedPagination}
    </>
  )
}

export default React.memo(People)
