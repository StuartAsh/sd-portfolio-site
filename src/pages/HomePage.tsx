import { useState } from 'react';
import SiteMenu from '../components/SiteMenu';
import ModalContentBox from '../components/ModalContentBox';

function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const messageText = 'With a career spanning over two decades, I have developed and maintained a wide variety of web and mobile applications, demonstrating a keen proficiency in JavaScript, React.js, Redux, Node.js, Python, SQL, and other modern technologies.';
  const boxWidth = 600;
  const boxHeight = 400;
  const startx = window.innerWidth / 2 - boxWidth / 2;
  const starty = window.innerHeight / 2 - boxHeight / 2;
  return (
    <>
      <div className='main-layout'>
        <div className='side-bar'>
          <SiteMenu isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
        <div className='main-window'></div>
      </div>
    {isVisible && 
      <div className='blur-mask'>&nbsp;</div>
    }
    <ModalContentBox width={boxWidth} height={boxHeight} startx={startx} starty={starty} 
      title="Welcome to Stuart Dodgshon's Portfolio" isVisible={isVisible} setIsVisible={setIsVisible} 
      onClose={() => console.log('Closed')}>
        <p>I am a Full Stack Developer with a robust portfolio of skills and extensive experience in both front-end and back-end development.</p>
        <p>{messageText}</p>
        <p>All React components on this site were created by me without the use of any component libraries.</p>
        <p className='small-text'><span className='note'>Note:</span> This component is draggable. Click the modal window header to drag the modal.</p>
    </ModalContentBox>
    </>
  )
}

export default HomePage;
