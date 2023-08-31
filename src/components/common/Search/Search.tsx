import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider'

interface SearchProps {
  onSearch: (searchText: string) => void
  onClear: () => void
  value?: string
};

const Search = ({ onSearch, onClear, value = '' }: SearchProps): React.ReactNode => {
  const [searchText, setSearchText] = useState<string>(value)

  const handleSearch: () => void = React.useCallback(() => {
    if (searchText !== '') {
      onSearch(searchText)
    }
  }, [searchText])

  const handleClear = (): void => {
    setSearchText('')
    onClear()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && searchText !== '') {
      event.preventDefault()
      onSearch(searchText)
    }
  }

  const inputOnChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <Paper component="form" sx={{ display: 'flex', alignItems: 'center' }}>
      <InputBase
        sx = {{ ml: 1, flex: 1 }}
        value = {searchText}
        onKeyDown = {handleKeyDown}
        onChange = {inputOnChange}
        placeholder = "Search"
        inputProps = {{ 'aria-label': 'Search' }}
      />
      {searchText !== '' && (
        <>
          <IconButton onClick={handleClear} type="button" sx={{ p: '10px' }} aria-label="clear">
            <CloseIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </>
      )}
      <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
