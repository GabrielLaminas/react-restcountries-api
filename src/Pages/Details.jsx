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
  
  React.useEffect(() => {
    const borders = data.map(({borders}) => borders)
  
    function getBorder(border){
      border.map(e => {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${e}`)
        .then(response => response.json())
        .then(json => json)
      });
    }
    //getBorder(borders)
  }, [data]);
  
  if(loading) return <Loading />
  
  return (
    <SectionContainer theme={theme}>
      <Link to="/" className='back_tohome'>
        <div>
          <box-icon name='arrow-back' size='sm' />
          <span>Back</span>
        </div>
      </Link>

      {data.length > 0 && data.map((detail) => (
        <ArticleGrid key={detail.name.common} theme={theme}>
          <div className='grid_containerImage'>
            <img 
              src={detail.flags.svg}
              alt={`flag of ${detail.name.common}`}
            />
          </div>
          
          <div className='grid_gridInfo'>
            <h2>{detail.name.common}</h2>
            <div className='grid_gridInfoLeft'>
              <p>Official name: <span>{detail.name.official}</span></p>
              <p>Population: <span>{detail.population}</span></p>
              <p>Region: <span>{detail.region}</span></p>
              <p>Subregion: <span>{detail.subregion}</span></p>
              <p>Capital: <span>{detail.capital[0]}</span></p>
            </div>

            <div className='grid_gridInfoRight'>
              <p>Top Level Domain: <span>{detail.tld}</span></p>
              <p>Currencies: {" "}
                {Object.values(detail.currencies)
                  .map(({name}) => <span key={name}>{name}</span>)}
              </p>
              <p>Languages: {" "}
                {Object.values(detail.languages).map((lan, i) => (
                  <span key={i}>{lan}</span>
                ))}
              </p>
            </div>

            <div className='grid_gridInfoFooter'>
              <p>Border Countries: {" "}
                {detail.borders 
                  ? detail.borders.map((border, id) => (
                    <Link
                      className='link_country' 
                      key={id}
                      //onLoad={handleOnLoad(border)}
                      to={`/detail/${detail.name.common}`}
                    >
                      {border + " "}
                    </Link>
                    ))
                  : <span>Does not have</span>
                }
              </p>
            </div>
          </div>
        </ArticleGrid>
      ))}
    </SectionContainer>
  )
}

export default Details;