import { Todo } from '../pages/TodoApp';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoList({ todos, setTodos }: TodoListProps) {
  const handleToggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className='todo-list-container'> 
      <ul className='todo-list'>
      {todos.sort((a,b) => (Number(a.completed) - Number(b.completed))).map((todo) => (
        <li key={todo.id} className='todo-item'>
          <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
          <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
      </ul>
    </div>
  )
}