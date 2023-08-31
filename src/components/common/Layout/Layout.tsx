import Container from '@mui/material/Container'
import React, { type FC } from 'react'
import Typography from '@mui/material/Typography'
interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container component = {'main'} sx={{ p: '24px 0' }} maxWidth="sm">
      <Typography variant="h3" component="h1" sx={{ m: '0 0 20px' }}>
          The Star Wars
      </Typography>
      {children}
    </Container>
  )
}

export default Layout
