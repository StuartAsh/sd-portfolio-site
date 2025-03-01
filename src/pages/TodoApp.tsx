import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Todo.css';
import Panel from '../components/Panel'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoListType = {
  id: number;
  name: string;
  todos: Todo[];
};

function TodoApp() {
  const [todoLists, setTodoLists] = useState<TodoListType[]>(() => {
    // Initialize state from local storage
    const savedTodoLists = localStorage.getItem('todoLists');
    if (savedTodoLists) {
      return JSON.parse(savedTodoLists);
    }

    // Check for old structure and upgrade
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const defaultList: TodoListType = {
        id: 1,
        name: 'Default List',
        todos: JSON.parse(savedTodos),
      };
      // Remove old structure from local storage
      localStorage.removeItem('todos');
      return [defaultList];
    }

    // Initialize with a default empty list if nothing exists
    return [{
      id: 1,
      name: 'Default List',
      todos: []
    }];
  });

  // If there are no lists, create a default one
  useEffect(() => {
    if (todoLists.length === 0) {
      setTodoLists([{
        id: 1,
        name: 'Default List',
        todos: []
      }]);
      setCurrentListId(1);
    }
  }, [todoLists]);

  const [currentListId, setCurrentListId] = useState<number>(() => {
    return todoLists.length > 0 ? todoLists[0].id : 1;
  });

  const [newListName, setNewListName] = useState<string>('');
  const [isAddingList, setIsAddingList] = useState<boolean>(false);

  useEffect(() => {
    // Update local storage whenever todoLists state changes
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }, [todoLists]);

  const handleAddTodo = (todo: string) => {
    const currentList = todoLists.find(list => list.id === currentListId);
    if (!currentList) return;

    if (currentList.todos.some(t => t.text.toLowerCase() === todo.toLowerCase())) {
      alert('This todo already exists');
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    const updatedLists = todoLists.map(list =>
      list.id === currentListId
        ? { ...list, todos: [...list.todos, newTodo] }
        : list
    );

    setTodoLists(updatedLists);
  };

  const handleListChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    setCurrentListId(selectedId);
  };

  const toggleAddListForm = () => {
    setIsAddingList(!isAddingList);
    setNewListName('');
  };

  const handleAddList = () => {
    if (!newListName.trim()) {
      alert('Please enter a list name');
      return;
    }

    // Check if list name already exists
    if (todoLists.some(list => list.name.toLowerCase() === newListName.trim().toLowerCase())) {
      alert('A list with this name already exists');
      return;
    }

    const newList: TodoListType = {
      id: Date.now(),
      name: newListName.trim(),
      todos: []
    };

    setTodoLists([...todoLists, newList]);
    setCurrentListId(newList.id);
    setIsAddingList(false);
    setNewListName('');
  };

  const handleDeleteList = () => {
    if (todoLists.length <= 1) {
      alert('You cannot delete the only list');
      return;
    }

    if (confirm('Are you sure you want to delete this list and all its todos?')) {
      const updatedLists = todoLists.filter(list => list.id !== currentListId);
      setTodoLists(updatedLists);
      setCurrentListId(updatedLists[0].id);
    }
  };

  const currentList = todoLists.find(list => list.id === currentListId);

  return (
    <>
      <div className="app-container">
        <Panel>
          <div className='colOne'>
            <div className="app-header">
              <h1>More Todo <span className="home-button"><NavLink className="NavLink" to="/"><button>Go Home</button></NavLink></span></h1>
              <span className='sub-title'>Manage your tasks with ease</span>
            </div>
            
            <div className="list-controls">
              <h2>Todo Lists:</h2>
              <div className="list-selector">
                <select value={currentListId} onChange={handleListChange}>
                  {todoLists.map(list => (
                    <option key={list.id} value={list.id}>{list.name}</option>
                  ))}
                </select>
                <button onClick={handleDeleteList}>Delete List</button>
              </div>
              
              {isAddingList ? (
                <div className="add-list-form">
                  <input
                    type="text"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="New list name"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddList();
                      if (e.key === 'Escape') toggleAddListForm();
                    }}
                  />
                  <button onClick={handleAddList}>Add</button>
                  <button onClick={toggleAddListForm}>Cancel</button>
                </div>
              ) : (
                <button className="add-list-button" onClick={toggleAddListForm}>
                  + New List
                </button>
              )}
            </div>
            
            <AddTodo addTodoItem={(todo: string) => handleAddTodo(todo)} />
          </div>
          
          <div className='colTwo'>
            {currentList ? (
              <div className="todo-list-header">
                <h2>{currentList.name}</h2>
                <TodoList 
                  todos={currentList.todos || []} 
                  currentListId={currentListId}
                  updateTodoLists={setTodoLists}
                />
              </div>
            ) : (
              <div className="todo-list-empty">
                <p>No list selected. Please create or select a list.</p>
              </div>
            )}
          </div>
        </Panel>
      </div>
    </>
  )
}

export default TodoApp
