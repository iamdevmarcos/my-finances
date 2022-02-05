import React, { useState, useEffect } from "react";

import * as C from "./App.styles";

import { Item } from "./types/Item";
import { Category } from "./types/Category";

import { categories } from "./data/categories";
import { items } from "./data/items";

import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.Title>Finanças Pessoais</C.Title>
      </C.Header>
      <C.Body>
        {/* Area de informações */}

        {/* Area de inserção */}

        {/* Tabela de Itens */}
      </C.Body>
    </C.Container>
  );
};

export default App;
