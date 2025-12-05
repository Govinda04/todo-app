import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import TodoInput from "./TodoInput";
import TodoChecked from "../../assets/icons/TodoCheckedIcon";
import TodoUnChecked from "../../assets/icons/TodoUnCheckedIcon";
import { ToDoListItem } from "../hooks/useTodoList";
import CancelIcon from "../../assets/icons/CancelIcon";

interface TodoItemProps {
  item: ToDoListItem;
  handleUpdateItem: (item: ToDoListItem) => void;
  handleRemoveItem: () => void;
}

const TodoItem = ({
  item,
  handleUpdateItem,
  handleRemoveItem,
}: TodoItemProps) => {
  const { name, isChecked } = item;

  const handleCheckBoxPressed = () => {
    handleUpdateItem({
      ...item,
      isChecked: !item.isChecked,
    });
  };

  const handleItemTxtChange = (text: string) => {
    handleUpdateItem({
      ...item,
      name: text,
    });
  };

  return (
    <View>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={handleCheckBoxPressed} activeOpacity={0.4}>
          {isChecked ? <TodoChecked /> : <TodoUnChecked />}
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TodoInput value={name} handleItemTxtChange={handleItemTxtChange} />
        </View>
        <TouchableOpacity onPress={handleRemoveItem} activeOpacity={0.4}>
          <CancelIcon color="#33b1f0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
});

export default TodoItem;
