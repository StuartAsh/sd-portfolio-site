import { useRef } from 'react';
import DraggableComponent from './DraggableComponent';

type ModalMessageBoxProps = {
  title: string;
  message: string;
  width?: number;
  height?: number;
  onClose: () => void;
  isVisible?: boolean;
  setIsVisible?: (isVisible: boolean) => void;
  startx?: number;
  starty?: number;
};

export default function ModalMessageBox(props: ModalMessageBoxProps) {
  const headerRef = useRef(null);
  const { width = 300, height = 200, startx = 0, starty = 0 } = props;
  
  const handleClick = () => {
    props.onClose();
    if (props.setIsVisible) {
      props.setIsVisible(false);
    }
  };

  return (
    <DraggableComponent clickTargetRef={headerRef} initialPosition={{ x: startx, y: starty }}>
      <div className="glass-modal" style={{ width: `${width}px`, height: `${height}px`, display: `${props.isVisible ? 'block':'none'}` }}>
          <div className="glass-modal-header" ref={headerRef}>
            <span>{props.title}</span>
          </div>
          <div className="glass-modal-content">
            <div className="glass-modal-content-message">{props.message}</div>
            <div className="glass-modal-footer" style={{width: `${width - 20}px` }}>
                <button onClick={handleClick}>Close</button>          
            </div>
          </div>  
        </div> 
      </DraggableComponent>
  );
}