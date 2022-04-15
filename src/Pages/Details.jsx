import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

import useFetch from '../Hook/useFetch';
import 'boxicons';
import Loading from '../Helpers/Loading';

import {
  SectionContainer,
  ArticleGrid
} from './detailsStyle';

const Details = () => {
  const params = useParams();
  const name = params.name.toLowerCase();
  const { theme } = React.useContext(ThemeContext);
  const { data, loading } = useFetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

  if(loading) return <Loading />
  console.log(data)
  return (
    <SectionContainer theme={theme}>
      <Link to="/">
        <div>
          <box-icon name='arrow-back' size='sm' />
          <span>Back</span>
        </div>
      </Link>

      {data && data.map((detail) => (
        <ArticleGrid key={detail.name.common}>
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

            <p>Top Level Domain: <span>{detail.tld}</span></p>
          </div>
        </ArticleGrid>
      ))}
    </SectionContainer>
  )
}

export default Details;


/**<article>
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
      </article> */