import { useState, useEffect } from "react";

const useFetch = (url = "", options = {}) => {
  const [dataAPI, setDataAPI] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((dataAPI) => {
        if (isMounted) {
          setDataAPI(dataAPI);
          setError(null);
        }
      })

      .catch((error) => {
        if (isMounted) {
          setError(error);
          setDataAPI(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, []); //eslint-disable-line

  return { loading, error, dataAPI };
};
export default useFetch;
