import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import 'boxicons';

import useFetch from '../Hook/useFetch';
import useDebounce from '../Hook/useDebounce';

import Loading from '../Helpers/Loading';
import Error404 from '../Assets/404Error.svg?component';

import { 
  MainContainer, 
  Form,
  FormLabel,
  MainGrid, 
  ContainerSvg 
} from './homeStyle';

const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  const [region, setRegion] = React.useState('');
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search, 400);

  const urlAllCountries = 'https://restcountries.com/v3.1/all';
  const [url, setUrl] = React.useState(urlAllCountries);

  const { data, loading } = useFetch(url);

  React.useEffect(() => {
    if(debouncedSearch){
      const urlSearchCountry = `https://restcountries.com/v3.1/name/${debouncedSearch}`;
      setUrl(urlSearchCountry);
      setRegion('');
    }
    else{
      setUrl(urlAllCountries);
    }
  }, [debouncedSearch]);

  const filterRegion = React.useCallback((region) => {
    const urlFilterRegion = `https://restcountries.com/v3.1/region/${region}`;
    setUrl(urlFilterRegion);
    setRegion(region);
  }, []);

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
              value={search}
              onChange={({target}) => setSearch(target.value)}
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
              name='region' 
              id='region'
              value={region}
              onChange={({target}) => filterRegion(target.value)}
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

      {loading 
        ? <Loading /> 
        : (<MainGrid theme={theme}>
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
          </MainGrid>)
      }

      {(data.status === 404 && loading === false) && (
        <ContainerSvg>
         <Error404 />
        </ContainerSvg>
      )}
    </main>
  )
}

export default Home;