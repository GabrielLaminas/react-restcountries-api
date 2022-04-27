import React from 'react';

const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);

  React.useEffect(() => {
    async function fetchData(urls){
      try{
        setLoading(true);
        const response = await fetch(urls);

        if(!response.ok){
          setError(response.ok);
        }

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
  
  return { data, loading, error };
}

export default useFetch;