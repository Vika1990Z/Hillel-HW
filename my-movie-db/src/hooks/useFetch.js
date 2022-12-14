import { useEffect } from "react";

const useFetch = (url, setData) => {
    useEffect(() => {
          fetch(url)
              .then(res => res.json())
              .then (data => {
                  data.results ? setData(data.results) : setData(data);
              })
              .catch (err => {
                console.log('Error', err)
              })
              .finally(() => console.log('data loaded'));
    },[])
}
 
export default useFetch;
