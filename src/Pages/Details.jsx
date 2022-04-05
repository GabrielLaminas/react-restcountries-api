import React from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

import useFetch from '../Hook/useFetch';
import 'boxicons';
import Loading from '../Helpers/Loading';

const Details = () => {
  const params = useParams();
  const name = params.name.toLowerCase();
  const { theme } = React.useContext(ThemeContext);
  const { data, loading } = useFetch(`https://restcountries.com/v3.1/name/${name}}`);

  if(loading) return <Loading />
  
  return (
    <section>
      <Navigate to="/">
        <box-icon name='arrow-back' />
        <span>Back</span>
      </Navigate>

      <article>
        {data && data.map((detail) => (
          <article key={detail.name.common}>
            <div>
              <img 
                src={detail.flags.png}
                alt={`flag of ${detail.name.common}`}
              />
            </div>
            
            <div>
              <h2>{detail.name.common}</h2>
              <p>Official name: <span>{detail.name.official}</span></p>
              <p>Population: <span>{detail.population}</span></p>
              <p>Region: <span>{detail.region}</span></p>
              <p>Subregion: <span>{detail.subregion}</span></p>
              <p>Capital: <span>{detail.capital[0]}</span></p>
            </div>tld
          </article>
        ))}
      </article>
    </section>
  )
}

export default Details;