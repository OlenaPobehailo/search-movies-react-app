import axios from 'axios';
import { useEffect, useState } from 'react';

export const useHttpRequest = (url, param) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios(url, param);
        setData(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [param, url]);

  return [data, { isLoading, error }];
};
