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