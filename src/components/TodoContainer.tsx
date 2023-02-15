import * as React from "react";
import { Todo } from "../App";

interface ITodoContainerProps {
  todos: Todo[];
}
const TodoContainer: React.FunctionComponent<ITodoContainerProps> = ({
  todos,
}) => {
  todos.map((i: any) => {
    return null;
  });

  return (
    <>
      {
        todos.map((i: any) => {
          return null;
          // return <Todo todo={todo}/>
        })
      }
    </>
  );
};

export default TodoContainer;
