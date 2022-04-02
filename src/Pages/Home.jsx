import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import 'boxicons';

import { 
  Main, 
  MainContainer, 
  Form,
  FormLabel 
} from './homeStyle';

const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  const [region, setRegion] = React.useState('');

  return (
    <Main theme={theme}>
      <MainContainer>
        <Form>
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
    </Main>
  )
}

export default Home;