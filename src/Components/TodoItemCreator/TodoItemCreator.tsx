import React, { ChangeEvent, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputState, todoListState, TodoTypes } from "../../Atoms/todoListAtom";

const TodoItemCreator = () => {
  const [contents, setContents] = useRecoilState<string>(inputState);
  const todos = useRecoilValue<TodoTypes[]>(todoListState);
  const setTodoList = useSetRecoilState<TodoTypes[]>(todoListState);

  const addItem = () => {
    setTodoList([
      ...todos,
      {
        id: getId(),
        text: contents,
        isCompleted: false,
      },
    ]);
    setContents("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setContents(value);
  };

  return (
    <div>
      <input type="text" value={contents} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
