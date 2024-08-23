import styled from "styled-components";

const InputSearch = styled.input`
  margin: 2rem 0;
  padding: 1.2rem 0.5rem;
  width: 30rem;
  height: 2.5rem;
  border-radius: 5px;
  border: 2px solid #a34343;
  font-size: 1.5rem;
  font-family: inherit;
  background-color: inherit;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.5rem #a34343;
  }
`;

const SearchDivContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export { InputSearch, SearchDivContainer };
