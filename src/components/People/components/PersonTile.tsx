import React from 'react'
import type { FC } from 'react'
import type { IPerson } from '@api/types'
import Typography from '@mui/material/Typography'
import WomanIcon from '@mui/icons-material/Woman'
import ManIcon from '@mui/icons-material/Man'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'

interface PersonTileProps {
  person?: IPerson
  loading?: boolean
}

const PersonTile: FC<PersonTileProps> = ({ person = {}, loading = false }) => {
  return (
    <Card>
      <CardContent sx={{ minHeight: 120 }}>
        {loading && <>
          <Skeleton animation='wave' height={40} />
          <Skeleton animation='wave' height={40} />
        </>}
        {!loading && <>
          <Typography variant='h5' sx={{ mb: 1.5 }} aria-label='name' component='div'>
            {person.name}
          </Typography>
          <Grid container>
            <Grid item xs='auto'>
              <Typography sx={{ mr: 1 }} aria-label='birth_year' color='text.secondary'>
                {person?.birth_year !== 'unknown' ? person.birth_year : ''}
              </Typography>
            </Grid>
            <Grid item xs='auto'>
              <Typography aria-label='gender' color='text.secondary'>
                {person.gender === 'male' && <ManIcon/>}
                {person.gender === 'female' && <WomanIcon/>}
                {person.gender === 'hermaphrodite' && 'hermaphrodite'}
              </Typography>
            </Grid>
          </Grid>
        </>}
      </CardContent>
    </Card>
  )
}

export default React.memo(PersonTile)
