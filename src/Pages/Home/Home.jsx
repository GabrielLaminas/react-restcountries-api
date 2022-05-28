import React from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import 'boxicons';

import useFetch from '../../Hook/useFetch';
import Loading from '../../Helpers/Loading';
import Error404 from '../../Assets/404Error.svg?component';

import { 
  MainContainer, 
  Form,
  FormLabel,
  ContainerSvg 
} from './homeStyle';

import CountriesList from '../../Layout/CountriesList/CountriesList';

const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  const [url, setUrl] = React.useState(() => {
    const getStore = localStorage.getItem('region');
    return getStore 
      ? `https://restcountries.com/v3.1/region/${getStore}` 
      : 'https://restcountries.com/v3.1/all'
  });

  const [region, setRegion] = React.useState(() => {
    const localRegion = localStorage.getItem('region');
    return localRegion ? localRegion : ''
  });

  const [search, setSearch] = React.useState('');
  const { data, loading } = useFetch(url);

  React.useEffect(() => {
    if(search){
      const urlSearchCountry = `https://restcountries.com/v3.1/name/${search}`;
      setRegion('');
      setUrl(urlSearchCountry);
    }
  }, [search]);

  function filterRegion(region){
    if(region){
      const urlFilterRegion = `https://restcountries.com/v3.1/region/${region}`;

      setRegion((prevRegion) => prevRegion = region);
      setUrl((prevUrl) => prevUrl = urlFilterRegion);
      localStorage.setItem('region', region);
    } 
    else{
      setRegion('');
      setUrl('https://restcountries.com/v3.1/all');
      localStorage.removeItem('region');
    }
  }

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
              <option value="">Filter by Region</option>
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
        : <CountriesList theme={theme} data={data} />
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