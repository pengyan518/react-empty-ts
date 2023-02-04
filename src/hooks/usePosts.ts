import axios from 'axios'
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'

function usePosts(url: string, queryKey=['posts']) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const {data} = await axios.get(url)
      return data
    },
  })
}

export default usePosts
