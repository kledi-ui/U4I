import styled from "styled-components";

const Style = styled.table`
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #FAFBFC;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4D9DE0;
    color: white;
  }
`;

export default Style;
