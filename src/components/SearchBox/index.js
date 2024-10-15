import { InputSearch, SearchDivContainer } from "./styles";

const SearchBox = ({ onSearchChange }) => {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <SearchDivContainer>
      <InputSearch
        type="text"
        placeholder="Search by title"
        onChange={handleInputChange}
      />
    </SearchDivContainer>
  );
};

export default SearchBox;
