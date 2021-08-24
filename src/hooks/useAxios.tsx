import { useEffect, useReducer } from "react";
import axios from "axios";

const axiosReducer = (state, action) => {
  switch (action.type) {
    case "AXIOS_INIT":
      return {
        isLoading: true,
        isError: false
      };
    case "AXIOS_SUCCESS":
      return {
        isLoading: false,
        isError: false,
        response: action.payload
      };
    case "AXIOS_FAILURE":
      return {
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useAxios = (url: string, config: any) => {
  const [state, dispatch] = useReducer(axiosReducer, {
    isLoading: false,
    isError: false
  });
  useEffect(() => {
    const source = axios.CancelToken.source();

    const callAxios = async () => {
      dispatch({ type: "AXIOS_INIT" });

      try {
        const result = await axios(url, {
          ...config,
          cancelToken: source.token
        });
        dispatch({ type: "AXIOS_SUCCESS", payload: result });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Canceled request.");
          return;
        }
        dispatch({ type: "AXIOS_FAILURE" });
      }
    };

    callAxios();

    return () => {
      source.cancel("Operation canceled.");
    };
  }, [url, config]);

  return state;
};

export default useAxios;
