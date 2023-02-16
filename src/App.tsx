import { FC, useState } from "react";
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

  fetch("./src/dataset.json")
    .then((res) => res.json())//res peut être appelé comme on le souhaite
    .then((resJson) => setTodos(resJson.data)// resJson peut être appelé comme on le souhaite, data est target grace au console log
    )


  if (todos.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <>
      <button onClick={() => setTodos([])}>Charger les Todos</button>
      <p>
        {todos.length === 0
          ? "les dotos ne sont pas chargées"
          : "Les todos sont chargées"}
      </p>
      <TodoCounter todos={todos} />
      <TodoContainer todos={todos} />
      <TodoAdder setTodos={setTodos} />
    </>
  );
};

export default App;
