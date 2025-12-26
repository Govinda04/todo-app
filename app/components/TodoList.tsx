import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { getUniqueId } from "../helper/common.helper";
import useTodoList, { ToDoListItem } from "../hooks/useTodoList";
import TodoItem from "./TodoItem";

// const _dummyListData: ToDoListItem[] = [
//   {
//     id: 1,
//     name: "do task 1",
//     isChecked: true,
//   },
//   {
//     id: 2,
//     name: "do task 2",
//     isChecked: false,
//   },
//   {
//     id: 3,
//     name: "",
//     isChecked: false,
//   },
// ];

const TodoList = () => {
  const { list: _listData, updateItem, addItem, removeItem } = useTodoList();

  const handleUpdateItem = (item: ToDoListItem) => {
    updateItem(item.id, item);
  };
  const handleAddItem = () => {
    addItem({
      id: getUniqueId(),
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
      <Button onPress={handleAddItem} title="+ Add an Item" />
      <FlatList
        data={_listData}
        renderItem={_renderItem}
        keyExtractor={({ id }) => `to-do-item-${id}`}
        style={{
          paddingBottom: 40,
          marginBottom: 10,
        }}
      />
      {/* <Text>{JSON.stringify(_listData, null, 2)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 100,
  },
});

export default TodoList;
