import { View, FlatList, StyleSheet, Text, Button } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import useTodoList, { ToDoListItem } from "../hooks/useTodoList";

const _dummyListData: ToDoListItem[] = [
  {
    id: 1,
    name: "do task 1",
    isChecked: true,
  },
  {
    id: 2,
    name: "do task 2",
    isChecked: false,
  },
  {
    id: 3,
    name: "",
    isChecked: false,
  },
];

const TodoList = () => {
  const {
    list: _listData,
    updateItem,
    addItem,
    removeItem,
    idCount,
  } = useTodoList(_dummyListData);

  const handleUpdateItem = (item: ToDoListItem) => {
    updateItem(item.id, item);
  };
  const handleAddItem = () => {
    addItem({
      id: idCount + 1,
      name: "",
      isChecked: false,
    });
  };

  const _renderItem = ({ item }: { item: ToDoListItem }) => {
    const handleRemoveItem = () => {
      removeItem(item.id);
    };
    return (
      <TodoItem
        item={item}
        handleUpdateItem={handleUpdateItem}
        handleRemoveItem={handleRemoveItem}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={_listData}
        renderItem={_renderItem}
        keyExtractor={({ id }) => `to-do-item-${id}`}
      />
      <Button onPress={handleAddItem} title="Add an Item" />
      <Text>{JSON.stringify(_listData, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
  },
});

export default TodoList;
