import { StyledH3 } from "./styles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IDLE, LOADING, SUCCEEDED, FAILED } from "../../state/status";
import { addToCart } from "../../state/cartSlice";
import { fetchProducts } from "../../state/productsSlice";
import Spinner from "../Spinner";
import SearchBox from "../SearchBox";
import FilteredList from "../FilteredList";

const ProductList = ({ url }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsItems);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    status === IDLE && dispatch(fetchProducts(url));
  });

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("ADD TO CART", product);
  };

  return (
    <main>
      <SearchBox onSearchChange={handleSearchChange} />
      {status === LOADING ? (
        <Spinner />
      ) : status === FAILED ? (
        <StyledH3 $isBold>
          An error has occurred! <em>{error}</em>{" "}
        </StyledH3>
      ) : (
        <FilteredList
          products={products}
          searchText={searchText}
          handleOnClick={handleAddToCart}
        />
      )}
    </main>
  );
};

export default ProductList;
