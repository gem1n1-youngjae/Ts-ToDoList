import { atom } from "recoil";

export interface TodoTypes {
  id: number;
  text: string;
  isCompleted: boolean;
}

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

export const todoListState = atom<TodoTypes[]>({
  key: "todoListState",
  default: [
    {
      id: 1,
      text: "Todo List를",
      isCompleted: false,
    },

    {
      id: 2,
      text: "자유롭게",
      isCompleted: false,
    },

    {
      id: 3,
      text: "추가해보세요!",
      isCompleted: false,
    },
  ],
});
