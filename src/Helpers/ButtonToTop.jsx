import React from 'react';
import 'boxicons';
import styled from 'styled-components';
import { ThemeContext } from '../Context/ThemeContext';

const ButtonContainer = styled.div`
  width: 54px;
  height: 54px;
  position: fixed;
  top: 572px;
  right: 30px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.backgroundElements};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .2);
  transition: all .2s;
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

  return (
    <ButtonContainer theme={theme}>
      <box-icon 
        type='solid' 
        name='chevron-up'
      />
    </ButtonContainer>
  )
}

export default ButtonToTop;