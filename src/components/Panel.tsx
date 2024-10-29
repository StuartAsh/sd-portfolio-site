


import { ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
}

export default function Panel({ children }: PanelProps) {
  return (
    <div className="panel-border">
      <div className="panel">
        {children}
      </div>
    </div>
  )
}