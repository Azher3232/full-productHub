// import "./styles.css";
import { StyledArticle } from "./styles";
import Product from "../ProductList/Product";

const FilteredList = ({ products, searchText, handleOnClick }) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <StyledArticle>
      {filteredProducts !== null
        ? filteredProducts.map((product) => {
            const { image, title, description, price, rating, id } = product;
            return (
              <Product
                image={image}
                title={title}
                description={description}
                price={price}
                rating={rating.rate}
                key={id}
                id={id}
                handleOnClick={() => handleOnClick(product)}
              />
            );
          })
        : null}
    </StyledArticle>
  );
};

export default FilteredList;
