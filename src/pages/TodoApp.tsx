import { useEffect, useState } from 'react';
import '../Todo.css';
import Panel from '../components/Panel'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize state from local storage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    // Update local storage whenever todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo: string) => {
    if(todos.some(t => t.text.toLowerCase() === todo.toLowerCase())) {
      alert('This todo already exists');
      return;
    };
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      completed: false
    } 
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <div className="app-container">
        <Panel>
          <div className='colOne'>
            <AddTodo addTodoItem={(todo: string) => handleAddTodo(todo)} />
          </div>
          <div className='colTwo'>
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </Panel>
      </div>
    </>
  )
}

export default TodoApp
