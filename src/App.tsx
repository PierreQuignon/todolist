import { useEffect, useState } from "react";
import TodoAdder from "./components/TodoAdder";
import TodoContainer from "./components/TodoContainer";
import TodoCounter from "./components/TodoCounter";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

const App: any = () => {
  const [todos, setTodos] = useState<Todo[] | []>([]); //le useState revoi une valeur de type array d'objet todo ou bien un array vide
  const [dataTodo, setDataTodo] = useState<Todo[] | []>([]);

  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json()) //'res' peut être appelé comme on le souhaite
      .then(
        (resJson) => setDataTodo(resJson.data) // 'resJson' peut être appelé comme on le souhaite, data est target grace au console log
      );
  });

  if (dataTodo.length === 0)
  return <p>loading...</p>

  return (
    <>
      <p>
        {todos.length === 0
          ? "Les todos ne sont pas chargées"
          : "Les todos sont chargées"}
      </p>
      <button onClick={()=> setTodos(dataTodo)}>Charger des Todos</button>
      <TodoCounter todos={todos} />
      <TodoContainer todos={todos} />
      <TodoAdder setTodos={setTodos} />
    </>
  );
};

export default App;
