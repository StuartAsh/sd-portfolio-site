import { Todo, TodoListType } from '../pages/TodoApp';
import { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

type TodoListProps = {
  todos: Todo[];
  currentListId: number;
  updateTodoLists: (callback: (prevLists: TodoListType[]) => TodoListType[]) => void;
};

export default function TodoList({ todos, currentListId, updateTodoLists }: TodoListProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  const editInputRef = useRef<HTMLInputElement>(null);
  
  // Local state to manage the sorted todo items
  const [sortedTodos, setSortedTodos] = useState<Todo[]>([]);

  // Update sortedTodos when the todos prop changes
  useEffect(() => {
    // Sort todos by completion status
    const sorted = [...todos].sort((a, b) => (Number(a.completed) - Number(b.completed)));
    setSortedTodos(sorted);
  }, [todos]);

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
  
  // Start editing a todo
  const handleStartEdit = (id: number, text: string) => {
    // Don't allow editing if we're already editing another todo
    if (editingTodoId !== null) return;
    
    setEditingTodoId(id);
    setEditingText(text);
    
    // Focus the input after a small delay to allow the component to render
    setTimeout(() => {
      if (editInputRef.current) {
        editInputRef.current.focus();
      }
    }, 10);
  };
  
  // Save the edited todo
  const handleSaveEdit = () => {
    if (editingTodoId === null) return;
    
    // Don't save if the text is empty
    if (!editingText.trim()) {
      setEditingTodoId(null);
      return;
    }
    
    // Save changes if the text is different
    updateTodoLists(prevLists => 
      prevLists.map(list => 
        list.id === currentListId
          ? {
              ...list,
              todos: list.todos.map(todo => 
                todo.id === editingTodoId
                  ? { ...todo, text: editingText.trim() }
                  : todo
              )
            }
          : list
      )
    );
    
    // Reset editing state
    setEditingTodoId(null);
    setEditingText('');
  };
  
  // Cancel editing
  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditingText('');
  };
  
  // Handle key presses in the edit input
  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  // Handle drag end event
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // If there's no destination or if the item is dropped in the same position, do nothing
    if (!destination || 
        (destination.droppableId === source.droppableId && 
         destination.index === source.index)) {
      return;
    }

    // Create a new array of todos with the dragged item in the new position
    const newTodos = Array.from(sortedTodos);
    const [movedItem] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, movedItem);
    
    // Update local state
    setSortedTodos(newTodos);
    
    // Persist the new order to the parent component
    updateTodoLists(prevLists => 
      prevLists.map(list => 
        list.id === currentListId
          ? {
              ...list,
              todos: newTodos
            }
          : list
      )
    );
  };

  return (
    <div className='todo-list-container' id="scrollable-todo-list"> 
      <div className="todo-list-scroller" ref={scrollerRef}>
        <div className="todo-list-inner">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todoList">
              {(provided) => (
                <ul 
                  className='todo-list'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sortedTodos.map((todo, index) => (
                    <Draggable 
                      key={todo.id.toString()} 
                      draggableId={todo.id.toString()} 
                      index={index}
                      isDragDisabled={editingTodoId === todo.id}
                    >
                      {(provided, snapshot) => (
                        <li 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`todo-item ${snapshot.isDragging ? 'dragging' : ''}`}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? 0.8 : 1
                          }}
                        >
                          <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => handleToggleTodo(todo.id)} 
                          />
                          
                          {editingTodoId === todo.id ? (
                            <div className="todo-edit-container">
                              <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                onKeyDown={handleEditKeyDown}
                                onBlur={handleSaveEdit}
                                ref={editInputRef}
                                className="todo-edit-input"
                              />
                              <div className="todo-edit-buttons">
                                <button onClick={handleSaveEdit} className="todo-edit-save">✓</button>
                                <button onClick={handleCancelEdit} className="todo-edit-cancel">✕</button>
                              </div>
                            </div>
                          ) : (
                            <span onClick={() => handleStartEdit(todo.id, todo.text)}>{todo.text}</span>
                          )}
                          
                          <button className="delete-todo-icon" onClick={() => handleDeleteTodo(todo.id)} title="Delete Todo">×</button>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {sortedTodos.length === 0 && (
                    <li className="todo-item todo-empty">No items in this list</li>
                  )}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <div className="scroll-spacer"></div>
        </div>
      </div>
    </div>
  );
}