import React from 'react'
import GlobalStyle from './GlobalStyle';

import { Theme } from './Context/ThemeContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Layout/Header';

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App;