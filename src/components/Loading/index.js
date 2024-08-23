import { helix } from "ldrs";
import { StyledDiv } from "./styles";

const Loading = () => {
  helix.register("helix-spinner");

  return (
    <StyledDiv className="loading-container">
      <helix-spinner size="117" color="#C40C0C" />
    </StyledDiv>
  );
};

export default Loading;
