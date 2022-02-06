import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #ccc;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background: #000;
  color: #fff;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background: #000;
  color: #fff;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
