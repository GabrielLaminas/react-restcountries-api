import styled from "styled-components";

export const Headerr = styled.header`
  background-color: ${({theme}) => theme.backgroundElements};
  transition: .2s;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme}) => theme.color};
  transition: .2s;

  & > * {
    color: ${({theme}) => theme.color};
    fill: ${({theme}) => theme.color}
  }

  h1{
    font-size: 1.25rem;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  div{
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    span{
      @media screen and (max-width: 480px) {
        font-size: 0.875rem;
      }
    }
  }
`;