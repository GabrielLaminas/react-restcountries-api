import React from 'react'
import GlobalStyle from './GlobalStyle';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Layout/Header';
import { Theme } from './Context/ThemeContext';

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