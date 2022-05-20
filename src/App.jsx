import React from 'react'
import GlobalStyle from './GlobalStyle';

import { Theme } from './Context/ThemeContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Layout/Header/Header';
import Details from './Pages/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail/:name' element={<Details />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  )
}

export default App;