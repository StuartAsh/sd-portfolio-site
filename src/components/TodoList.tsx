import { Todo, TodoListType } from '../pages/TodoApp';

type TodoListProps = {
  todos: Todo[];
  currentListId: number;
  updateTodoLists: (callback: (prevLists: TodoListType[]) => TodoListType[]) => void;
};

export default function TodoList({ todos, currentListId, updateTodoLists }: TodoListProps) {
  const handleToggleTodo = (id: number) => {
    updateTodoLists(prevLists => 
      prevLists.map(list => 
        list.id === currentListId 
          ? {
              ...list,
              todos: list.todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
              )
            }
          : list
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    updateTodoLists(prevLists => 
      prevLists.map(list => 
        list.id === currentListId
          ? {
              ...list,
              todos: list.todos.filter(todo => todo.id !== id)
            }
          : list
      )
    );
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