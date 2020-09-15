export const IS_LOADING = 'IS_LOADING';


export const setIsLoading = isLoading => {
  return {
    type: IS_LOADING,
    isLoading
  }
}