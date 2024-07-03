import { useRef, useEffect, useState } from 'react';

type DraggableComponentProps = {
  children: React.ReactNode;
  clickTargetRef: React.RefObject<HTMLElement>;
  initialPosition?: { x: number; y: number };
};

const DraggableComponent = ({ children, clickTargetRef, initialPosition }: DraggableComponentProps) => {
  const [position, setPosition] = useState(initialPosition || { x: 0, y: 0 });
  const dragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      dragging.current = true;
      dragStartPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (dragging.current) {
        setPosition({ x: e.clientX - dragStartPos.current.x, y: e.clientY - dragStartPos.current.y });
      }
    };

    const clickTarget = clickTargetRef.current;
    if (clickTarget) {
      clickTarget.style.cursor = 'move';
      clickTarget.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (clickTarget) {
        clickTarget.style.cursor = '';
        clickTarget.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [clickTargetRef, position]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: 'none',
        zIndex: 1010
      }}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;