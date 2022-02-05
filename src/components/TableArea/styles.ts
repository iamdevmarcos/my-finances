import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background: #000;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-top: 20px;
  color: #ccc;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
  color: #fff;
`;
