import {
  StyledSection,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductDetails,
  ProductPriceIcon,
  ProductRatingIcon,
  DivIconContainer,
  StyledButton,
} from "./styles";

const Product = ({
  image,
  title,
  description,
  price,
  rating,
  handleOnClick,
}) => {
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
      <DivIconContainer>
        <StyledButton onClick={handleOnClick}>Add to cart</StyledButton>
      </DivIconContainer>
    </StyledSection>
  );
};

export default Product;
