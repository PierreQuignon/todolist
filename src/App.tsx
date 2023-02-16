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

export const fakeTodos = [
  { id: 1, title: "learn React", done: false, content: "make app" },
  { id: 2, title: "make food", done: false, content: "piemontaise" },
  { id: 3, title: "do sport", done: true, content: "running" },
];

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[] | []>([]); //le useState revoi une valeur de type array d'objet todo ou bien un array vide
  console.log(todos);

  return (
    <>
      <button onClick={() => setTodos(fakeTodos)}>Charger les Todos</button>
      <p>{todos.length === 0 ? 'les dotos ne sont pas chargées':'Les todos sont chargées'}</p>
      <TodoCounter todos={todos} />
      <TodoContainer todos={todos} />
      <TodoAdder setTodos={setTodos} />
    </>
  );
};

export default App;
