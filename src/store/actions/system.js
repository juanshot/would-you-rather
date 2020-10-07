import { IS_LOADING } from "./types";

export const setIsLoading = (isLoading) => {
  return {
    type: IS_LOADING,
    isLoading,
  };
};
