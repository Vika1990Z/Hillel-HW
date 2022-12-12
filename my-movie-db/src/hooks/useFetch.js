import { useEffect } from "react";

const useFetch = (url, setData, setError, setIsPending) => {

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout (() => {
          fetch(url, { signal: abortCont.signal })
              .then(res => {
                  if (!res.ok) {
                      throw Error ("Can't fetch the data for that resource");
                  }
                  return res.json();
              })
              .then (data => {
                  setData(data);
                  setIsPending(false);
                  setError(null);
              })
              .catch (err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
              })
        }, 1000)
        return () => abortCont.abort();
    },[])

}
 
export default useFetch;
