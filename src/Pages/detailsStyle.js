import styled from "styled-components";

export const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  //border: 2px solid red;

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
  gap: 100px;
  //border: 2px solid red;
  background-color: transparent;

  img{
    width: 100%;
    height: 100%;
  }
`;