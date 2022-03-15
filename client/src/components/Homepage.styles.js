import styled from "styled-components";

export const Wrapper = styled.div`
  .carousel{
    overflow: hidden;
  }
  .inner{
      white-space: nowrap;
      transition: transform 0.3s;
  }
  .carousel-item{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      background-color: lightBlue;
      color: white;
  }
  .indicators{
      display: flex;
      justify-content: center;
  }
  .indicators > button {
      margin: 5px;
  }
  .indicators > button.active {
      background-color: darkBlue;
  }
`;