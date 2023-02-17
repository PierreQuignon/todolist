import { useEffect, useState } from "react";
import TodoAdder from "./components/TodoAdder";
import TodoContainer from "./components/TodoContainer";
import TodoCounter from "./components/TodoCounter";
import "./index.css";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

const App: any = () => {
  const [todos, setTodos] = useState<Todo[] | []>([]); //le useState revoi une valeur de type array d'objet todo ou bien un array vide
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json()) //'res' peut être appelé comme on le souhaite
      .then((resJson) => {
        if (clicked) {
          setTodos(resJson.data);
        } // 'resJson' peut être appelé comme on le souhaite, data est target grace au console log
      });
  }, [clicked]);

  return (
    <>
      <div className="flex justify-center p-5 m-5 gap-5">
        <div className="w-1/3">
          <TodoAdder setTodos={setTodos} />
        </div>
        <div className=" flex text-center border border-black p-5 rounded w-2/3 gap-5">
          <div className="w-4/5">
            <TodoContainer todos={todos} setClicked={setClicked} />
          </div>
          <div className="w-1/5">
            <TodoCounter todos={todos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
