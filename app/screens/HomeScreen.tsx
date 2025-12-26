import React from "react";
import SyncButton from "../components/SyncButton";
import TodoList from "../components/TodoList";
import Wrapper from "../components/Wrapper";

const HomeScreen = () => {
  return (
    <Wrapper>
      <TodoList />
      <SyncButton />
    </Wrapper>
  );
};

export default HomeScreen;
