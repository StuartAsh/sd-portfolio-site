import { Todo, TodoListType } from '../pages/TodoApp';
import { useEffect, useRef } from 'react';

type TodoListProps = {
  todos: Todo[];
  currentListId: number;
  updateTodoLists: (callback: (prevLists: TodoListType[]) => TodoListType[]) => void;
};

export default function TodoList({ todos, currentListId, updateTodoLists }: TodoListProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll handling with improved iOS support
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    
    // Mark the scrollable area explicitly for iOS
    // Use type assertion to work around TypeScript limitation with vendor prefixes
    (scroller.style as any)['-webkit-overflow-scrolling'] = 'touch';
    
    
    // Ensure the container is scrollable by refreshing scroll properties
    const makeScrollable = () => {
      // Force repaint to help iOS recognize the element as scrollable
      scroller.style.display = 'none';
      void scroller.offsetHeight; // Force reflow
      scroller.style.display = 'block';
      
      // Add a small delay before resetting to flex
      setTimeout(() => {
        scroller.style.display = 'flex';
      }, 20);
    };
    
    // Run this once on mount
    makeScrollable();
    
    // Add pointer events to ensure iOS gives this touch priority
    const addPointerEvents = () => {
      scroller.style.touchAction = 'pan-y';
      scroller.style.cursor = 'pointer';
    };
    
    // Ensure the container is in the right state after orientation changes
    const handleOrientationChange = () => {
      setTimeout(makeScrollable, 300);
    };
    
    // Simple touch start handler
    const handleTouchStart = () => {
      // Disable body scrolling when touching the list
      document.body.style.overflow = 'hidden';
      addPointerEvents();
    };
    
    // Re-enable body scrolling when touch ends
    const handleTouchEnd = () => {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 50);
    };
    
    // Minimize event handlers - sometimes less is more on iOS
    scroller.addEventListener('touchstart', handleTouchStart, { passive: true });
    scroller.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      scroller.removeEventListener('touchstart', handleTouchStart);
      scroller.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('orientationchange', handleOrientationChange);
      document.body.style.overflow = '';
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
        <div className="todo-list-inner">
          <ul className='todo-list'>
          {todos.sort((a,b) => (Number(a.completed) - Number(b.completed))).map((todo) => (
            <li key={todo.id} className='todo-item'>
              <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
              <span>{todo.text}</span>
              <button className="delete-todo-icon" onClick={() => handleDeleteTodo(todo.id)} title="Delete Todo">×</button>
            </li>
          ))}
          {todos.length === 0 && (
            <li className="todo-item todo-empty">No items in this list</li>
          )}
          </ul>
          <div className="scroll-spacer"></div>
        </div>
      </div>
    </div>
  )
}