import {
  StyledHeader,
  HeaderHeadingPrimary,
  HeaderUList,
  StyledLink,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderHeadingPrimary>ProductHub</HeaderHeadingPrimary>
      <nav>
        <HeaderUList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/category/electronics" $isBlue>
              Electronics
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/category/jewelery">Jewelry</StyledLink>
          </li>
          <li>
            <StyledLink to="/category/men's clothing">
              Men's Clothing
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/category/women's clothing">
              Women's Clothing
            </StyledLink>
          </li>
        </HeaderUList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
