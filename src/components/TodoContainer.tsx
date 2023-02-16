import * as React from "react";
import { Todo as todoType} from "../App";
import Todo from "./Todo";

interface ITodoContainerProps {//Ceci sert au typage des props
  todos: todoType[];
}

const TodoContainer: React.FunctionComponent<ITodoContainerProps> = ({
  todos,
}) => {

  return (
    <>
      {
        todos.map((todo, index) => {
          // return null;
          return <Todo key={`${todo.title}-${index}`}  todo={todo}/>
        })
      }
    </>
  );
};

export default TodoContainer;
