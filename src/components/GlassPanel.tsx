type GlassPanelProps = {
  title: string;
  width?: string;
  height?: string;
  isVisible?: boolean;
  children: React.ReactNode;
};

export default function GlassPanel({title,width,height,isVisible, children}: GlassPanelProps) {
  return (
    <div className="glass-modal" style={{ width: `${width}`, height: `${height}`, display: `${isVisible ? 'block':'none'}` }}>
    {title !== '' &&
      <div className="glass-modal-header">
        <span>{title}</span>
      </div>
    }
      <div className="glass-modal-content">
        <div className="glass-modal-content-message">{children}</div>
      </div>  
    </div> 
  );
}