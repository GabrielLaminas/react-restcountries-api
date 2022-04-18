import styled from "styled-components";

export const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  & > * {
    fill: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.backgroundElements};
    color: ${({theme}) => theme.color};
  }

  a{
    margin-bottom: 60px;
    padding: 6px 28px;
    display: inline-block;
    border-radius: 4px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, .2);
    
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px; 
    }
  }
`;

export const ArticleGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  background-color: transparent;

  .grid_containerImage{
    width: 100%;
    height: 100%;
  }

  .grid_gridInfo{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 60px;

    h2{
      grid-column: span 2;
    }

    p{
      margin: 6px 0;
      font-weight: 600;
    }

    span{
      font-weight: 300;
      font-size: 0.875rem;
    }

    @media screen and (max-width: 560px) {
      grid-template-columns: 1fr;
      gap: 20px;

      h2{
        grid-column: span 1;
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;

    .grid_containerImage{
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 560px) {
    gap: 40px;

    .grid_containerImage{
      width: 100%;
    }
  }
`;