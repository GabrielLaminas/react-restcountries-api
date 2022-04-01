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
      </MainContainer>
    </Main>
  )
}

export default Home;