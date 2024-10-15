import styled from "styled-components";

const StyledH3 = styled.h3`
  padding: 1rem;
  font-size: 2.6rem;
  text-align: center;
  color: #860a35;
  font-weight: ${(props) => (props.$isBold ? "900" : "700")};
  letter-spacing: ${(props) => (props.$isBold ? "0.3rem" : "")};

  em {
    color: #a34343;
  }
`;

export { StyledH3 };
