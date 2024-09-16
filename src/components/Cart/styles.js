import styled from "styled-components";

const CartContainer = styled.div`
  position: absolute;
  right: 0;
  top: 60px; // Ajusta según la altura de tu header
  width: 300px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
`;

export { CartContainer, CartItem };
