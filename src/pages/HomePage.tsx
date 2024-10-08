import { useContext, useState } from 'react';
import SiteMenu from '../components/SiteMenu';
import ModalContentBox from '../components/ModalContentBox';
import GlassPanel from '../components/GlassPanel';
import { MobileContext } from '../main';

function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useContext(MobileContext);
  const boxWidth = isMobile ? 310 : 600;
  const boxHeight = isMobile ? 540 : 400;

  const messageText = 'With a career spanning over two decades, I have developed and maintained a wide variety of web and mobile applications, demonstrating a keen proficiency in JavaScript, React.js, Redux, Node.js, Python, SQL, and other modern technologies.';
 
  const startx = window.innerWidth / 2 - boxWidth / 2;
  const starty = window.innerHeight / 2 - boxHeight / 2;

  const welcomeText = isMobile ? 'Welcome':'Welcome to my website.';

  return (
    <>
      <div className='content-area'>
        <div className='column column-fixed side-bar'>
          <SiteMenu isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
        <div className='column column-fluid'>
        <GlassPanel title={'Home Page'} width="auto" height="auto" isVisible={true}>
          <div className='container'>
            <div className='section'>
              <p>This site is an example of my web development skills, crafted with React.js and TypeScript. It offers a glimpse into my projects while showcasing my expertise in cutting-edge technologies. Explore to see both my work and my technical abilities in action.</p> 
              <h3>Key features include:</h3>
              <ul className='bullets'>
                <li>Custom-built React components</li>
                <li>Hand-crafted CSS and HTML</li>
                <li>Full responsiveness for optimal viewing across all devices</li>
                <li>Clean, efficient codebase</li>
              </ul>

              <p>This project reflects my commitment to creating high-quality, performant web applications. Feel free to explore and get a firsthand look at my development capabilities.</p>
              <h3>Section Overview:</h3>
              <ul>
                <li><strong>About:</strong> This page is a brief overview of my career.</li>
                <li><strong>Resume:</strong> This page contains my full resume.</li>
                <li><strong>GitHub:</strong> This is an external link to my GitHub page.</li>
                <li><strong>LinkedIn:</strong> This is an external link to my LinkedIn profile.</li>
              </ul>
            </div>
          </div>
        </GlassPanel>
        </div>
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
