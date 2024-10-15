import styled from "styled-components";

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 9rem;
  width: 20%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  height: calc(100% - 25rem);
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  overflow-y: scroll;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    padding-top: 1.5rem;
    font-size: 1.4rem;
  }

  @media (max-width: 75rem) {
    width: 30%;
  }

  @media (max-width: 62rem) {
    width: 35%;
  }

  @media (max-width: 53rem) {
    width: 50%;
  }

  @media (max-width: 37rem) {
    width: 65%;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.6rem;
`;

const ItemTitle = styled.span`
  font-size: 1.4rem;
  flex: 1;
  margin-right: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 62rem) {
    font-size: 1.2rem;
  }
`;

const ItemDetails = styled.span`
  font-size: 1.4rem;
  white-space: nowrap;
  margin-right: 20px;

  @media (max-width: 62rem) {
    font-size: 1.2rem;
  }
`;

const RemoveButton = styled.button`
  font-size: 1rem;
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #cc0000;
  }

  @media (max-width: 62rem) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`;

const TotalSection = styled.div`
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #eaeaea;
  padding-top: 20px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;

    @media (max-width: 62rem) {
      font-size: 1.6rem;
    }
  }
`;

const ClearButton = styled.button`
  font-size: 1.2rem;
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e5533d;
  }

  @media (max-width: 62rem) {
    font-size: 1rem;
    padding: 8px 18px;
  }
`;

const BuyButton = styled.button`
  font-size: 1.2rem;
  background-color: #32cd32;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #28a428;
  }

  @media (max-width: 62rem) {
    font-size: 1rem;
    padding: 8px 18px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  button {
    font-size: 1.2rem;
    background-color: #4682b4;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #3a6d91;
    }
  }
`;

export {
  CartContainer,
  CartItem,
  ItemTitle,
  ItemDetails,
  RemoveButton,
  TotalSection,
  ClearButton,
  BuyButton,
  Modal,
  ModalContent,
};
