import styled from 'styled-components';

export const MainContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between; 
  align-items: center;

  .formSearch{
    width: 440px;

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .07);
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
    width: 100%;
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

    @media screen and (max-width: 560px) {
       max-width: 100%;
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

export const MainGrid = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  
  & > * {
    background-color: ${({theme}) => theme.backgroundElements};
    color: ${({theme}) => theme.color};
  }

  a{
    transition: transform .2s ease;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, .07);
    cursor: pointer;
    
    div:first-child{
      height: 160px;
      overflow: hidden;
      
      img{
        min-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    div:last-child{
      padding: 16px;
    }

    h2{
      margin-bottom: 16px;
      font-size: 1.125rem;
    }

    p{
      margin: 4px 0;
      font-size: 0.875rem;
      font-weight: 600;
    }

    span{
      font-weight: 300;
    }

    &:hover{
      transform: scale(1.15, 1.15);
      @media screen and (max-width: 560px) {
        transform: scale(1.11, 1.11);
      }
    }
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    justify-content: center;
    grid-template-columns: 300px;
  }
`;

export const ContainerSvg = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #svgError{
    width: 60%;
    position: absolute;
    top: -120px;

    @media screen and (max-width: 768px){
      width: 100%;
      top: -80px;
    }
  } 
`