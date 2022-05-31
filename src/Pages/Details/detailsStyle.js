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

  .back_tohome{
    margin-bottom: 60px;
    padding: 6px 28px;
    display: inline-block;
    border-radius: 4px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, .12);
    
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
    gap: 25px 40px;

    h2{
      grid-column: span 2;
    }

    p{
      margin: 6px 0;
      font-weight: 600;
    }

    span{
      font-weight: 300;
      opacity: 0.98;
      letter-spacing: 0.2px;
      font-size: 0.875rem;
    }
    
    .grid_gridInfoRight{
      .languages + .languages::before{
        content: ', ';
        display: inline;
      }
    }

    .grid_gridInfoFooter{
      grid-column: span 2;

      p{
        display: inline-block;

        @media screen and (max-width: 560px) {
          display: block;
        }
      }

      .link_country{
        margin: 6px 4px;
        padding: 4px 24px;
        display: inline-block;
        background-color: ${({theme}) => theme.backgroundElements};
        color: ${({theme}) => theme.color};
        font-size: 0.875rem;
        font-weight: 300;
        border-radius: 4px;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, .12);
      }
    }

    @media screen and (max-width: 560px) {
      grid-template-columns: 1fr;
      gap: 20px;

      h2, .grid_gridInfoFooter{
        grid-column: span 1;
      }
    }
  }

  @media screen and (max-width: 960px) {
    gap: 40px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: start;

    .grid_containerImage{
      max-width: 600px;
    }
  }

  @media screen and (max-width: 560px) {
    .grid_containerImage{
      width: 100%;
    }
  }
`;