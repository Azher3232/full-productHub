import { StyledH3 } from "./styles";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading";
import SearchBox from "../SearchBox";
import FilteredList from "../FilteredList";

const ProductList = ({ url }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const { response, loading, error } = useAxios(url);

  return (
    <main>
      <SearchBox onSearchChange={handleSearchChange} />
      {loading ? (
        <Loading />
      ) : !error ? (
        <FilteredList products={response} searchText={searchText} />
      ) : (
        <StyledH3 $isBold>
          An error has occurred! <em>{error.message}</em>{" "}
        </StyledH3>
      )}
    </main>
  );
};

export default ProductList;
