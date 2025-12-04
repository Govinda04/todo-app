import React from "react";
import { Text, View } from "react-native";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
};

export default HomeScreen;
