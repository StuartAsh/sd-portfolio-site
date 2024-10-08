import { useContext } from "react";
import { MobileContext } from "../main";

function MenuBar() {
  const isMobile = useContext(MobileContext);
  return (
    <>
      <div className='glass-modal menu-bar'>
        <span>{isMobile ? 'Stuart Dodgshon Web Developer': 'Stuart Dodgshon | Full Stack/UI developer'}</span>
      </div>
      
    </>
  )
}

export default MenuBar