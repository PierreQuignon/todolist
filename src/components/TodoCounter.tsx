import * as React from 'react';
import { Todo } from '../App';

interface ITodoCounterProps {
  todos : Todo[]
}

const TodoCounter: React.FunctionComponent<ITodoCounterProps> = ({todos}) => {

  const todosLength = todos.length

  return (
    <p className='border border-black flex flex-col justify-center p-5 rounded h-5 '>Nombre de ToDo :{todosLength}</p>
   );
};

export default TodoCounter;
