import * as React from "react";
import { Todo as todoType} from "../App";
import Todo from "./Todo";

interface ITodoContainerProps {//Ceci sert au typage des props
  todos: todoType[];
  setClicked:React.Dispatch<React.SetStateAction<boolean>>
}

const TodoContainer: React.FunctionComponent<ITodoContainerProps> = ({
  todos,
  setClicked,
}) => {

  return (
    <div className='flex flex-col'>
      {
        todos.map((todo, index) => {
          // return null;
          return <Todo key={`${todo.title}-${index}`}  todo={todo}/>
        })
      }
                <button
            className="border border-black rounded hover:bg-slate-300 p-2"
            onClick={() => setClicked(true)}
          >
            Charger des Todos
          </button>
    </div>
  );
};

export default TodoContainer;
