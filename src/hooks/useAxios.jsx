import { useState } from 'react';
import axios from 'axios';

const useAxios = (getBy) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async (query, pageValue, type, plot) => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}${getBy}=${query}&page=${pageValue}&type=${type === "Pelicula" ? "movie" : type === "Serie" ? "series" : ""
        }&plot=${plot}`,
    })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false)
      })
  };

  return { response, error, loading, fetchData };
};

export default useAxios;