import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  StyledHeader,
  HeaderHeadingPrimary,
  HeaderUList,
  StyledLink,
  ShoppingCartIcon,
  CartBadge,
} from "./styles";
import Cart from "../Cart";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

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
          <li>
            <ShoppingCartIcon onClick={toggleCart} />
            <CartBadge>{totalQuantity}</CartBadge>
          </li>
        </HeaderUList>
      </nav>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </StyledHeader>
  );
};

export default Header;
