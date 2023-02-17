import { createContext, useContext } from "react";

type Task = {
  _id: string;
  task: string;
  priority: "urgent" | "optional" | "soon";
  _v: number; 
}

type TodoListContextType = {
  todoList: Task[];
  settodoList?: Function
}

const TodoListContext = createContext<TodoListContextType>({
  todoList: []
});

const useTodoListContext = () => {
  const { todoList, settodoList } = useContext(TodoListContext);

  if (!settodoList) {
    throw Error('settodoList function is mandatory in TodoListContext')
  }

  return { todoList, settodoList }
}

export {
  TodoListContext,
  useTodoListContext
};
export type { Task };
