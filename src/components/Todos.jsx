import { Reorder, AnimatePresence } from 'framer-motion'
import { Fragment } from 'react'

const variants = {
  initial: {
    opacity: 0,
    transform: 'scale(0)',
  },
  animate: {
    opacity: 1,
    transform: 'scale(1)',
  },
  exit: {
    opacity: 0,
    transform: 'scale(0)',
  },
}

export const Todos = ({ todos = [], setTodos, onRemove }) => {
  return (
    <Reorder.Group as="ol" axis="y" values={todos} onReorder={setTodos}>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  )
}

const TodoItem = ({ todo, onRemove }) => {
  return (
    <Fragment>
      <Reorder.Item
        className="w-1/2 mx-auto mt-4 first:mt-0 p-2 text-center bg-white text-indigo-500 rounded-md shadow-lg shadow-indigo-500/40 cursor-move"
        value={todo}
        whileDrag={{
          scale: 1.1,
          boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff;',
        }}
        onDoubleClick={() => onRemove(todo.id)}
        {...variants}
      >
        <span className="">{todo.title}</span>
      </Reorder.Item>
    </Fragment>
  )
}
