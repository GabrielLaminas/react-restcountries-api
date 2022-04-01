import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';

import { Main } from './homeStyle';

const Home = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Main theme={theme}></Main>
  )
}

export default Home;