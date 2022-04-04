import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid hsl(207, 26%, 17%);
  border-top: 4px solid hsl(0, 0%, 100%);
  animation: ${rotate} 1s linear forwards infinite;
`;

const Loading = () => {
  return (
    <Container>
      <Circle />
    </Container>
  )
}

export default Loading;