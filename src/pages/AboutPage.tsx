import '../Resume.css';
import GlassPanel from '../components/GlassPanel';
import SiteMenu from '../components/SiteMenu';

function AboutPage() {
  return (
    <>
      <div className='content-area'>
        <div className='column column-fixed side-bar'>
          <SiteMenu isVisible={true} setIsVisible={() => {console.log('click')}} />
        </div>
        <div className='column column-fluid'>
          <GlassPanel title={'About Page'} width="auto" height="auto" isVisible={true}>
            <div className="container">
                <div className="section">
                  <h1>Stuart Dodgshon:</h1>
                  <p>Stuart lives in San Rafael, California. His hobbies include playing the guitar and piano, as well as hiking, kayaking, and exploring new places. He also writes fiction novels in his spare time.</p>
                </div>
                <div className="section">
                  <h1>Career Overview:</h1>
                  
                  <p>Stuart is a seasoned Full Stack Developer with a robust portfolio of skills and extensive experience in both front-end and back-end development. With a career spanning over two decades, Stuart has developed and maintained a wide variety of web and mobile applications, demonstrating a keen proficiency in JavaScript, React.js, Redux, Node.js, Python, SQL, and other modern technologies.</p>
                  
                  <h2>Key Skills:</h2>
                  <ul>
                      <li><strong>Front-End Development:</strong> Expertise in React.js, Redux, Angular.js, JavaScript, HTML, and CSS. Proficient in creating dynamic user interfaces and ensuring seamless user experiences.</li>
                      <li><strong>Back-End Development:</strong> Strong skills in Node.js, Python, Flask, Java, SQL, Postgres, and Neo4J, focusing on developing robust and scalable server-side applications.</li>
                      <li><strong>Mobile Development:</strong> Experience in developing mobile applications for both iOS and Android platforms using Swift and Java.</li>
                      <li><strong>Real-Time Internet Applications:</strong> Proficient in developing E-Commerce applications, web-based portals, and intranet/extranet systems.</li>
                  </ul>
                  
                  <p>Stuart's career is marked by a consistent record of delivering high-quality, user-focused solutions across various industries, including e-commerce, healthcare, and finance. His technical expertise, combined with leadership experience, makes him a valuable asset to any development team.</p>
                </div>
            </div>
          </GlassPanel></div>
      </div>
    </>
  )
}

export default AboutPage;