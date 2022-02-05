import { formatCurrentMonth } from "../../helpers/dateFilter";
import * as C from "./styles";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};

export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea></C.ResumeArea>
    </C.Container>
  );
};
