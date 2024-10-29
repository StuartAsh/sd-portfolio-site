import { useState } from "react";
import { NavLink } from "react-router-dom";

type AddTodoProps = {
  addTodoItem: (todo: string) => void;
}

export default function AddTodo({ addTodoItem }: AddTodoProps) {
  const [todo, setTodo] = useState<string>('');
  const handleAddTodo = (todo: string) => {
    todo = todo.trim();
    if(!todo) return;
    addTodoItem(todo);
    setTodo('');
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo(todo);
    }
  }

  return (
    <div className='add-todo'>
      <h1>More Todo <span className="home-button"><NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="/"><button>Go Home</button></NavLink></span></h1>
      <span className='sub-title'>Manage your tasks with ease</span>
      <br />
      <h2>Add Todo Item:</h2>
      <div className="add-todo">
        <input 
          type="text" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          onKeyDown={handleKeyPress} 
          placeholder="Enter todo item" 
        />
        <button onClick={() => handleAddTodo(todo)}>Add</button>
      </div>
    </div>
  )
}