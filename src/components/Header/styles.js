import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #c6dcba;
  padding: 3.5rem 10rem;
  display: flex;
  justify-content: space-between;
`;

const HeaderHeadingPrimary = styled.h1`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
`;

const HeaderUList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 3rem;

  li {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;
  color: inherit;
  font-weight: 500;

  &:hover {
    color: ${(props) => (props.$isBlue ? "#4793AF" : "#dd5746")};
  }
`;

export { StyledHeader, HeaderHeadingPrimary, HeaderUList, StyledLink };
