import * as React from "react";
import { fakeTodos, Todo } from "../App";

interface ITodoAdderProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | []>>; //setState est de type React.Dispa... je le récupère en survolant setState dans app.tsx
}

const newTodo = {
  id: Math.random(),
  title: "learn Ruby",
  done: false,
  content: "make app restaurants",
};

const TodoAdder: React.FunctionComponent<ITodoAdderProps> = ({ setTodos }) => {
  return (
    <div>
      <button
        onClick={() => {
          return setTodos((currentTodos) => [...currentTodos, newTodo]);
        }}
      >
        Ajout nouvelle todo
      </button>
    </div>
  );
};

export default TodoAdder;
