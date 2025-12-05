import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToDoListItem } from "../hooks/useTodoList";

export const STORAGE_KEY = "todo-list-data";

export const saveListToStorage = async (list: ToDoListItem[]) => {
  try {
    const jsonValue = JSON.stringify(list);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    // console.log("Stored in store: ", STORAGE_KEY);
  } catch (e) {
    console.error("Error saving list to AsyncStorage:", e);
  }
};

export const loadListFromStorage = async (
  setList: (value: React.SetStateAction<ToDoListItem[]>) => void
) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    if (jsonValue != null) {
      //   console.log(jsonValue);
      setList(JSON.parse(jsonValue) as ToDoListItem[]);
    } else {
      setList([]);
    }
  } catch (e) {
    console.error("Error loading list from AsyncStorage:", e);
    setList([]);
  }
};
