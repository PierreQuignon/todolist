import * as React from 'react';
import { Todo } from '../App';

interface ITodoCounterProps {
  todos : Todo[]
}
const TodoCounter: React.FunctionComponent<ITodoCounterProps> = ({todos}) => {

  const todosLength = todos.length

  return (
    <p>Nombre de ToDo :{todosLength}</p>
   );
};

export default TodoCounter;
