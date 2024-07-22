import { NavLink } from "react-router-dom";
import GlassPanel from "./GlassPanel";
import { useEffect, useState } from "react";

type SiteMenuProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function SiteMenu({isVisible, setIsVisible}: SiteMenuProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const width = isMobile ? '100%' : '200px';
  const height = isMobile ? '120px' : '400px';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleClick() {
    setIsVisible(true);
  }

  return (
      <GlassPanel title="Site Menu" width={width} height={height} isVisible={true}>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="/about">About</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="/resume">Resume</NavLink></li>
          <li><a href="https://github.com/StuartAsh" target="_new">GitHub page</a></li>
          <li><a href="https://www.linkedin.com/in/stuart-dodgshon/" target="_new">LinkedIn profile</a></li>
        </ul>
        <div className="glass-modal-footer" style={{width: '180px'}}>
          {!isVisible && !isMobile ? <button onClick={handleClick}>Show Message</button> : null}
        </div>
      </GlassPanel>
  );
}