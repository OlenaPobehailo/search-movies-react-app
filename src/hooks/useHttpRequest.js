import { useEffect, useState } from 'react';

export const useHttpRequest = (fn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fn(param)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [fn, param]);

  return [data, setData, { error, isLoading }];
};