import '../Resume.css';
import GlassPanel from '../components/GlassPanel';
import SiteMenu from '../components/SiteMenu';

function AboutPage() {
  return (
    <>
      <div className='main-layout'>
        <div className='side-bar'>
          <SiteMenu isVisible={true} setIsVisible={() => {console.log('click')}} />
        </div>
        <div className='main-window'>
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
                  
                  <h2>Professional Experience:</h2>
                  
                  <h3>Wayfair Inc (2021-2023):</h3>
                  <ul>
                      <li>As a Full Stack Developer, Stuart played a crucial role in developing and maintaining internal React applications, creating GraphQL endpoints, and managing data storage using Postgres and Neo4J.</li>
                  </ul>
                  
                  <h3>Fruit Street Health (2020-2021):</h3>
                  <ul>
                      <li>Led a team to create and maintain ReactJS applications, developed a telehealth application integrating Zoom SDK, and managed back-end services with Node.js and MongoDB.</li>
                  </ul>
                  
                  <h3>VoiceBase (2019-2020):</h3>
                  <ul>
                      <li>Focused on developing ReactJS applications and creating an analytics portal with various dashboards.</li>
                  </ul>
                  
                  <h3>Bank of America/Apex Systems (2017-2018):</h3>
                  <ul>
                      <li>Improved UI for internal applications, working with Python/Flask on the back-end and JavaScript/jQuery on the front-end.</li>
                  </ul>
                  
                  <h3>Healthline Inc (2014-2017):</h3>
                  <ul>
                      <li>Designed and developed UI for healthline.com and its mobile apps, working with AngularJS and iOS Swift.</li>
                  </ul>
                  
                  <h3>Triporati (2011-2014):</h3>
                  <ul>
                      <li>Designed and developed UI for the Triporati website, including co-branded sites with major partners.</li>
                  </ul>
                  
                  <h3>Walmart.com (2004-2011):</h3>
                  <ul>
                      <li>Developed UI and server-side software for high-volume e-commerce applications, using Java and Struts framework.</li>
                  </ul>
                  
                  <h3>Providian Financial (2001-2004):</h3>
                  <ul>
                      <li>Led multiple projects, developed e-commerce systems, and provided application support, utilizing Java and SQL.</li>
                  </ul>
                  
                  <h2>Education:</h2>
                  <ul>
                      <li><strong>Drake High School, San Anselmo, CA</strong></li>
                      <li><strong>College of Marin, Kentfield, CA:</strong> Majored in Computer Science</li>
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