import React from 'react'
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Intro from './features/intro/Intro'
import {useAppSelector} from './app/hooks'
import {RootState} from './app/store'
import ModalVideo from './components/ModalVideo'

// const twentyFourHoursInMs = 1000 * 60 * 60 * 24
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 5,
    },
  }})

function App() {
  const {modalIsOpened} = useAppSelector((state: RootState) => state.intro)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Intro />
        {modalIsOpened && <ModalVideo />}
      </div>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  )
}

export default App
