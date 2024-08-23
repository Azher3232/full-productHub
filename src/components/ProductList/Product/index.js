import {
  StyledSection,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductDetails,
  ProductPriceIcon,
  ProductRatingIcon,
  DivIconContainer,
} from "./styles";

const Product = ({ image, title, description, price, rating }) => {
  return (
    <StyledSection>
      <ProductImage src={image} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <DivIconContainer>
        <ProductPriceIcon />
        <ProductDetails>{price}</ProductDetails>
      </DivIconContainer>
      <DivIconContainer>
        <ProductRatingIcon />
        <ProductDetails $rating={rating}>{rating}</ProductDetails>
      </DivIconContainer>
    </StyledSection>
  );
};

export default Product;
