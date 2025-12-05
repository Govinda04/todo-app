import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import {
  loadListFromStorage,
  saveListToStorage,
} from "../helper/ayncStore.helper";

export interface ToDoListItem {
  id: string;
  name: string;
  isChecked: boolean;
}

const useTodoList = (initialList: ToDoListItem[] = []) => {
  const [list, setList] = useState<ToDoListItem[]>(initialList);

  useEffect(() => {
    loadListFromStorage(setList);
  }, []);

  const saveListDebounced = useDebounce(saveListToStorage, 500); // 500ms delay

  useEffect(() => {
    saveListDebounced(list);
  }, [list]);

  const addItem = (item: ToDoListItem) => {
    setList((prevList) => [...prevList, item]);
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
  };
};

export default useTodoList;
