import { useEffect, useState } from 'react';
import SiteMenu from '../components/SiteMenu';
import ModalContentBox from '../components/ModalContentBox';

function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const boxWidth = isMobile ? 300 : 600;
  const boxHeight = isMobile ? 500 : 400;

  const messageText = 'With a career spanning over two decades, I have developed and maintained a wide variety of web and mobile applications, demonstrating a keen proficiency in JavaScript, React.js, Redux, Node.js, Python, SQL, and other modern technologies.';
 
  const startx = window.innerWidth / 2 - boxWidth / 2;
  const starty = window.innerHeight / 2 - boxHeight / 2;

  const welcomeText = isMobile ? 'Welcome':'Welcome to Stuart Dodgshon\'s Portfolio';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='content-area'>
        <div className='column column-fixed side-bar'>
          <SiteMenu isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
        <div className='column column-fluid'></div>
      </div>
    {isVisible && 
      <div className='blur-mask'>&nbsp;</div>
    }
    <ModalContentBox width={boxWidth} height={boxHeight} startx={startx} starty={starty} 
      title={welcomeText} isVisible={isVisible} setIsVisible={setIsVisible} 
      onClose={() => console.log('Closed')}>
        <p>I am a Full Stack Developer with a robust portfolio of skills and extensive experience in both front-end and back-end development.</p>
        <p>{messageText}</p>
        <p>All React components on this site were created by me without the use of any component libraries.</p>
        {!isMobile &&
        <p className='small-text'><span className='note'>Note:</span> This component is draggable. Click the modal window header to drag the modal.</p>}
     </ModalContentBox>
    </>
  )
}

export default HomePage;
