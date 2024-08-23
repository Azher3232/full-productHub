import styled from "styled-components";
import { FaDollarSign, FaStar } from "react-icons/fa";

const StyledSection = styled.section`
  background-color: #dfd0b8;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border-radius: 5px;
  overflow: hidden;
  margin: 0 2rem 6rem 2rem;
`;

const ProductImage = styled.img`
  grid-column: 1/2;
  grid-row: 1 / -1;
  width: 60%;
  padding: 1rem 0;
  justify-self: center;
  border-radius: 2rem;
  overflow: hidden;
`;

const ProductTitle = styled.h4`
  grid-column: 2 / -1;
  font-size: 2rem;
  text-align: center;
  padding-top: 0.5rem;
  letter-spacing: 0.1rem;
  color: #803d3b;
`;

const ProductDescription = styled.p`
  padding: 1rem;
  font-size: 1.6rem;
  grid-column: 2/-1;
  line-height: 2rem;
`;

const ProductDetails = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${(props) => (props.$rating > 4.4 ? "#008170" : "")};
  padding-left: ${(props) => (props.$rating ? "0.5rem" : "")};
`;

const ProductPriceIcon = styled(FaDollarSign)`
  color: #a34343;
  font-size: 2.6rem;
`;

const ProductRatingIcon = styled(FaStar)`
  color: #a34343;
  font-size: 2.6rem;
`;

const DivIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledSection,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductDetails,
  ProductPriceIcon,
  ProductRatingIcon,
  DivIconContainer,
};
