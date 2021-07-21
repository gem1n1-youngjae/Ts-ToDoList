import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./Atoms/todoListAtom";
import { TodoItem, TodoItemCreator } from "./Components";

const App: React.FC = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
};

export default App;
