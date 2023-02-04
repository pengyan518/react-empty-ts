const usePostURLSearchParams = (parameter = 'tb') => {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)
  if (params.has(parameter)) {
    return `?${parameter}=1`
  }
  return ''
}

export default usePostURLSearchParams
