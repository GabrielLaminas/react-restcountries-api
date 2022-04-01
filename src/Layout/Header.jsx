import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';

import { Headerr, HeaderContainer } from './header.style';
import 'boxicons';

const Header = () => {
  const {
    isModeActive, 
    setIsModeActive, 
    theme
  } = React.useContext(ThemeContext);

  function handleClick(e){
    e.preventDefault()
    setIsModeActive(!isModeActive)   
  }

  return (
    <Headerr theme={theme}>
      <HeaderContainer theme={theme}>
        <h1>Where in the world?</h1>
        
        <div onClick={handleClick}>
        {isModeActive 
          ? (
            <>
              <box-icon 
                type="solid" 
                name="sun" 
              />
              <span>Light Mode</span>
            </>
          )
          :(
            <>
              <box-icon 
                type="solid" 
                name="moon" 
              />
              <span>Dark Mode</span>
            </>
          ) 
        }
        </div>
      </HeaderContainer>
    </Headerr>
  )
}

export default Header;