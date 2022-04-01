import React from 'react'
import GlobalStyle from './GlobalStyle';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;