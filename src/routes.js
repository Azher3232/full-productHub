import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductList url="https://fakestoreapi.com/products" />}
        />
        <Route
          path="/category/electronics"
          element={
            <ProductList url="https://fakestoreapi.com/products/category/electronics" />
          }
        />
        <Route
          path="/category/jewelery"
          element={
            <ProductList url="https://fakestoreapi.com/products/category/jewelery" />
          }
        />
        <Route
          path="/category/men's clothing"
          element={
            <ProductList url="https://fakestoreapi.com/products/category/men's clothing" />
          }
        />
        <Route
          path="/category/women's clothing"
          element={
            <ProductList url="https://fakestoreapi.com/products/category/women's clothing" />
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
