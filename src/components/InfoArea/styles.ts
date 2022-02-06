import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #ccc;
  margin-top: -35px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;
