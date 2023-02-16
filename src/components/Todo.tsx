import * as React from "react";
import { Todo as todoType } from "../App";

interface ITodoProps {
  todo: todoType;
}

const Todo: React.FunctionComponent<ITodoProps> = ({ todo }) => {
  return (
    <ul>
      <li>titre: {todo.title}</li>
      <li>contenu: {todo.content}</li>
      <li>fait: {todo.done ? 'oui' : 'non'}</li>
    </ul>
  );
};

export default Todo;
