const useUrlParameter = (url: string, parameter: string) => {
  const stringArray: any = url?.split('/')
  const index = stringArray.findIndex((item: string) => item === parameter)

  return index !== -1 ? stringArray[index + 1] : null
  // return '4QevC07xeso'
  // return '2NRZhegzhiM'
}

export default useUrlParameter
