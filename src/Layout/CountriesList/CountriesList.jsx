import React from 'react';
import { MainGrid } from '../../Pages/Home/homeStyle';

import { Link } from 'react-router-dom';

const CountriesList = ({theme, data}) => {
  return (
    <MainGrid theme={theme}>
      {data.length > 0 && (
      data.map(({flags, name, population, region, capital}, index) => (
        <Link to={`/detail/${name.common}`} key={index}>
          <div>
            <img
              src={flags.svg}
              alt={name.common}
              loading="lazy" 
            />
          </div>
          
          <div>
            <h2>{name.common}</h2>
            <p>Population: <span>{new Intl.NumberFormat('en-US').format(population)}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital ? capital : 'do not have'}</span></p>
          </div>
        </Link>
      )))}
    </MainGrid>
  )
}

export default CountriesList;