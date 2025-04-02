import { useContext } from "react";
import { MobileContext } from "../main";
import { NavLink, useLocation } from "react-router-dom";

function MenuBar() {
  const isMobile = useContext(MobileContext);
  const location = useLocation();
  const isTodoPage = location.pathname === "/todo";
  
  return (
    <>
      <div className='glass-modal menu-bar'>
        <span>{isTodoPage ? 'More Todo' : (isMobile ? 'Stuart Dodgshon Web Developer': 'Stuart Dodgshon | Full Stack/UI developer')}</span>
        {isTodoPage && <NavLink to="/" className="home-arrow" title="Go Home">&gt;</NavLink>}
      </div>
    </>
  )
}

export default MenuBar