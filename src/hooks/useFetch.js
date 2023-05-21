import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error("Data could not be fetched. Server error or permission denied.");
      }
      return response.json();
    })
    .then(data => {
      setIsPending(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
