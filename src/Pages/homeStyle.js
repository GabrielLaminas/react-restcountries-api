import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({theme}) => theme.backgroundColor};
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  max-width: 400px;
`;

export const FormLabel = styled.label`
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({theme}) => theme.backgroundElements};
  border-radius: 4px;

  & > * {
    fill: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.backgroundElements};
    color: ${({theme}) => theme.color};
  }
  
  input[type="search"]{
    width: 400px;
    padding: 16px 0;
    font-size: 0.875rem;
    border: none;
    background-color: ${({theme}) => theme.backgroundElements};
    color: ${({theme}) => theme.color};

    &:focus{
      outline: none;
    }

    &::placeholder{
      color: ${({theme}) => theme.inputColor};
    }
  }

  select{
    width: 100%;
    padding: 16px 24px;
    font-size: 0.875rem;
    border-radius: 4px;
    border: none;
    outline: none;

    &:focus{
      outline: none;
    }

  }
`;
