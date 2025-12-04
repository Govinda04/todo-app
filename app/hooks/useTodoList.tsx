import React, { useState } from "react";

export interface ToDoListItem {
  id: number; // string;
  name: string;
  isChecked: boolean;
}

const useTodoList = (initialList: ToDoListItem[] = []) => {
  const [list, setList] = useState<ToDoListItem[]>(initialList);
  const [idCount, setIdCount] = useState(initialList.length || 0);

  const addItem = (item: ToDoListItem) => {
    setList((prevList) => [...prevList, item]);
    setIdCount(idCount + 1);
  };

  const removeItem = (itemId: ToDoListItem["id"]) => {
    setList((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const updateItem = (
    itemId: ToDoListItem["id"],
    updatedItem: ToDoListItem
  ) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  };

  return {
    list,
    addItem,
    removeItem,
    updateItem,
    idCount,
  };
};

export default useTodoList;
