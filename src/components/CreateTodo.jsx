export const CreateTodo = ({ onCreate }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const title = e.target.todo.value

    if (title) {
      onCreate((prevTodos) => [
        ...prevTodos,
        {
          title,
          completed: false,
          id: Date.now(),
        },
      ])

      e.target.reset()
    }
  }

  return (
    <form
      className="flex align-middle justify-evenly w-1/2 mx-auto"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className="px-2 rounded-md shadow-lg shadow-indigo-500/40 outline-none"
        placeholder="New todo"
        name="todo"
      />
      <input
        className="w-1/3 py-2 bg-white text-indigo-500 rounded-lg shadow-lg shadow-indigo-500/40 cursor-pointer"
        type="submit"
        value="Add Todo"
      />
    </form>
  )
}
