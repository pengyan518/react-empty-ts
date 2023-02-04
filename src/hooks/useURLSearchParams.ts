const useURLSearchParams = (parameter = 'city', queryString = window.location.search): any | null => {
  const params = new URLSearchParams(queryString)
  return params.get(parameter)
}

export default useURLSearchParams
