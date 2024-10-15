import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

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
  align-items: center;
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
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.$isBlue ? "#4793AF" : "#dd5746")};
  }
`;

const ShoppingCartIcon = styled(FaShoppingCart)`
  color: #3c3d37;
  font-size: 3.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #707d66;
    cursor: pointer;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: 26px;
  right: 88px;
  background-color: #d9534f;
  color: white;
  border-radius: 50%;
  padding: 5px 7px;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 16px;
  text-align: center;
`;

export {
  StyledHeader,
  HeaderHeadingPrimary,
  HeaderUList,
  StyledLink,
  ShoppingCartIcon,
  CartBadge,
};
