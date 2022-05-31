import React from 'react';
import 'boxicons';
import styled from 'styled-components';
import { ThemeContext } from '../Context/ThemeContext';

const ButtonContainer = styled.div`
  width: 54px;
  height: 54px;
  position: fixed;
  display: none;
  top: 572px;
  right: 30px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.backgroundElements};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .2);
  transition: all .2s;
  opacity: 0;
  cursor: pointer;

  &:hover{
    transform: scale(1.2);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, .5);
  }

  & > * {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    fill: ${({theme}) => theme.color};
  }
`;

const ButtonToTop = () => {
  const { theme } = React.useContext(ThemeContext);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    function showButton(){
      if(window.scrollY > 400){
        buttonRef.current.style.display = 'initial';
        buttonRef.current.style.opacity = 1;
      } 
      else{
        buttonRef.current.style.display = 'none';
        buttonRef.current.style.opacity = 0;
      }
    }

    window.addEventListener('scroll', showButton);
    
    return () => window.removeEventListener('scroll', showButton);
  }, [buttonRef])

  function handleButton(){
    window.scrollTo(500, 0);
  }

  return (
    <ButtonContainer theme={theme} onClick={handleButton} ref={buttonRef}>
      <box-icon 
        type='solid' 
        name='chevron-up'
      />
    </ButtonContainer>
  )
}

export default React.memo(ButtonToTop);