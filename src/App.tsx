import { FC, useState } from 'react'
import TodoContainer from './components/TodoContainer'
import TodoCounter from './components/TodoCounter'

export interface Todo{
  id:number
  title:string
  done:boolean
  content:string
}

const App:FC = () => {
  const [todos, setTodos] = useState<Todo[] | []>([])//le useState revoi une valeur de type array d'objet todo ou bien un array vide
 return(<>
 <p>Mon app</p>
  <TodoCounter todos={todos}/>
  <TodoContainer todos ={todos}/>
 </>
 )
}

export default App
