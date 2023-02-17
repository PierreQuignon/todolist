import { useState } from "react";
import { Todo } from "../App";

interface ITodoAdderProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | []>>; //setState est de type React.Dispa... je le récupère en survolant setState dans app.tsx
}

const TodoAdder: React.FunctionComponent<ITodoAdderProps> = ({ setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: title,
      done: false,
      content: content,
    };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  return (
    <div className="border border-black flex flex-col p-5 rounded">
      <label>
        Titre
        <input
          className="border border-black p-2 m-2 rounded"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        Content :
        <input
           className="border border-black p-2 m-2 rounded"
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </label>
      <button className="border border-black rounded hover:bg-slate-300" onClick={() => addTodo()}>
        Soumettre
      </button>
    </div>
  );
};

export default TodoAdder;
