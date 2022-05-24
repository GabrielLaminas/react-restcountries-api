import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch(url);
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
    fetchData();
  }, [url])
  return { data, loading };
}

export default useFetch;