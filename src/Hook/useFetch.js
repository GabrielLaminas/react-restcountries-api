import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData(urls){
      try{
        setLoading(true);
        const response = await fetch(urls);
        const json = await response.json();
        setData(json)
      }
      catch(e){
        console.log(e);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData(url);
  }, [url])
  
  return { data, loading };
}

export default useFetch;