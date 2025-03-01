import { Todo, TodoListType } from '../pages/TodoApp';
import { useEffect, useRef } from 'react';

type TodoListProps = {
  todos: Todo[];
  currentListId: number;
  updateTodoLists: (callback: (prevLists: TodoListType[]) => TodoListType[]) => void;
};

export default function TodoList({ todos, currentListId, updateTodoLists }: TodoListProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll handling
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    
    // Prevent default touchmove behavior on the container to avoid page scrolling
    const handleTouchMove = (e: TouchEvent) => {
      if (scroller.scrollHeight > scroller.clientHeight) {
        e.stopPropagation();
      }
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      const touchStartY = e.touches[0].clientY;
      
      const handleTouchMoveWithDirection = (e: TouchEvent) => {
        const touchY = e.touches[0].clientY;
        const scrollTop = scroller.scrollTop;
        const scrollHeight = scroller.scrollHeight;
        const clientHeight = scroller.clientHeight;
        
        // Prevent default only when scrolling within bounds
        if (
          (scrollTop === 0 && touchY > touchStartY) || // At top and scrolling down
          (scrollTop >= scrollHeight - clientHeight && touchY < touchStartY) // At bottom and scrolling up
        ) {
          return; // Let the page scroll
        }
        
        // Otherwise prevent default to allow div to scroll
        e.preventDefault();
      };
      
      scroller.addEventListener('touchmove', handleTouchMoveWithDirection, { passive: false });
      
      const cleanup = () => {
        scroller.removeEventListener('touchmove', handleTouchMoveWithDirection);
        scroller.removeEventListener('touchend', cleanup);
        scroller.removeEventListener('touchcancel', cleanup);
      };
      
      scroller.addEventListener('touchend', cleanup, { once: true });
      scroller.addEventListener('touchcancel', cleanup, { once: true });
    };
    
    scroller.addEventListener('touchstart', handleTouchStart);
    scroller.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      scroller.removeEventListener('touchstart', handleTouchStart);
      scroller.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
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
    <div className='todo-list-container' id="scrollable-todo-list"> 
      <div className="todo-list-scroller" ref={scrollerRef}>
        <ul className='todo-list'>
        {todos.sort((a,b) => (Number(a.completed) - Number(b.completed))).map((todo) => (
          <li key={todo.id} className='todo-item'>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
            <span>{todo.text}</span>
            <button className="delete-todo-icon" onClick={() => handleDeleteTodo(todo.id)} title="Delete Todo">×</button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}