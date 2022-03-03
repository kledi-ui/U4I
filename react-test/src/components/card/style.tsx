import styled from "styled-components";

const Style = styled.div<any>`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  width: 300px;
  padding: 2px 16px;
  color: #ffffff;
  background-color: ${(props) => props.background};
`;

export default Style;
