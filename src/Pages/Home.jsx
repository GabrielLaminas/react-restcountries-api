import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import 'boxicons';

import useFetch from '../Hook/useFetch';
import Loading from '../Helpers/Loading';

import { 
  MainContainer, 
  Form,
  FormLabel,
  MainGrid 
} from './homeStyle';

const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  const [region, setRegion] = React.useState('');
  const { data, loading } = useFetch('https://restcountries.com/v3.1/all');

  return (
    <main>
      <MainContainer>
        <Form className='formSearch'>
          <FormLabel htmlFor='search' theme={theme}>
            <box-icon 
              name='search-alt-2'
            />
            <input 
              type="search"
              id='search'
              placeholder='Search for a country...'
            />
          </FormLabel>
        </Form>

        <Form>
          <FormLabel 
            htmlFor='region' 
            theme={theme}
            style={{padding: '0'}}
          >
            <select 
              value={region} 
              name='region' 
              id='region'
              onChange={({target}) => setRegion(target.value)}
            >
              <option value="" disabled>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </FormLabel>
        </Form>
      </MainContainer>

      {loading && <Loading />}
      <MainGrid theme={theme}>
        {data.length > 0 && data.map(({flags, name, population, region, capital}, index) => (
          <Link to={`/detail/${name.common}`} key={index}>
            <div>
              <img
                src={flags.png}
                alt={name.common} 
              />
            </div>
            <div>
              <h2>{name.common}</h2>
              <p>Population: <span>{population}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Capital: <span>{capital}</span></p>
            </div>
          </Link>
        ))}
      </MainGrid>
    </main>
  )
}

export default Home;