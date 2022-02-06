import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

export const AddArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(),
      category: "food",
      title: "Item de teste",
      value: 250.25,
    };
    onAdd(newItem);
  };

  return (
    <C.Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
