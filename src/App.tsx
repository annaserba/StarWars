import 'react-toastify/dist/ReactToastify.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PeopleRoute from '@/routes/PeopleRoute'

function App (): React.ReactNode {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={ <PeopleRoute/>}/>
        </Routes>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  )
}

export default App
