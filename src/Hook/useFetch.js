import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData(){
      try{
        setLoading(true);
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