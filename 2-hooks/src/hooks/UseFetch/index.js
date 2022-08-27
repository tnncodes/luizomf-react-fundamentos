import { useEffect, useState } from 'react';

// Esse é um Custom Hook
export const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };

    fetchData();
  }, [url]);

  return [result, loading];
};
