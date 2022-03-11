import { Fragment, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './index.css'

const defaultTodos = [
  { id: 1, title: 'Learn Framer Motion', completed: false },
  { id: 2, title: 'Create nice animation', completed: false },
  { id: 3, title: 'Use Reorder component', completed: false },
]

export default function App() {
  const [todos, setTodos] = useState(defaultTodos)

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="grid grid-flow-row gap-y-6 content-start min-w-[100vw] min-h-[100vh] py-5 bg-indigo-300">
      <CreateTodo onCreate={setTodos} />
      <Todos todos={todos} setTodos={setTodos} onRemove={onRemove} />
    </div>
  )
}
