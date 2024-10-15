import styled from "styled-components";

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 53rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledArticle };
