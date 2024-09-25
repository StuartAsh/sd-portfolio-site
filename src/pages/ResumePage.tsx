import '../Resume.css';
import GlassPanel from '../components/GlassPanel';
import SiteMenu from '../components/SiteMenu';

function ResumePage() {
  return (
    <>
      <div className='content-area'>
        <div className='column column-fixed side-bar'>
          <SiteMenu isVisible={true} setIsVisible={() => {console.log('click')}} />
          &nbsp;
        </div>
        <div className='column column-fluid'>
          <GlassPanel title={'Resume Page'} width="auto" height="auto" isVisible={true}>
            <div className="container">
                <div className="header">
                    <h1>Stuart Dodgshon</h1>
                    <p>San Rafael, CA 94901</p>
                    <p>510-332-7896</p>
                    <p>stuartash@gmail.com</p>
                </div>

                <div className="skills section">
                    <h2>SKILLS</h2>
                    <ul>
                        <li>JavaScript, React.js, Redux, Redux-Saga, Angular.js, JQuery, HTML, CSS, Python, Flask, Java, JSP, Jinja2, ASP, Swift, Android (Java), GraphQL, SQL, Neo4J (Cypher), Postgres, Docker, Open AI API, Cypress, Jest</li>
                        <li>Real-time Internet application environments such as E-Commerce applications, Web-based Portals, Mobile App Development on IOS and Android, and Intranet/Extranet development.</li>
                    </ul>
                </div>

                <div className="experience section">
                    <h2>EXPERIENCE</h2>
                    <ul>
                    <li>
                            <h3>AI Notes - Full Stack Developer</h3>
                            <p><strong>February 2024 to August 2024</strong></p>
                            <p>This is a personal project to create an LLM generative AI driven notes app. Ask me for a
                            demonstration.</p>
                            <p>This app was developed using the Open AI API, React JS frontend and NodeJS Express
                            backend.</p>
                            <p>Uses a combination of Prompt engineering, LLM analysis, and JSON template parsing to
                            expand and enrich basic notes into fully researched and organized articles.</p>
                        </li>
                        <li>
                            <h3>Wayfair Inc, Remote - Full Stack Developer</h3>
                            <p><strong>June 2021 to September 2023</strong></p>
                            <p>Level 4 Engineer focused on developing and maintaining a React application. Agile.</p>
                            <p>Front-end development: React, MobX, TypeScript, JavaScript, CSS, HTML, GraphQL, Docker, Cypress, Jest</p>
                            <p>Back-end development: NodeJs, Python, Java, Postgres, Neo4j</p>
                            <p>Created new React Pages, and Components for an internal React application. Created GraphQL endpoints and stored data in Postgres DB and Neo4j.</p>
                        </li>
                        <li>
                            <h3>Fruit Street Health, Remote - Front End Team Lead</h3>
                            <p><strong>April 2020 to April 2021</strong></p>
                            <p>Lead team of 2 other front-end devs and 2 off-shore contractors, focused on creating and maintaining ReactJS applications. Agile.</p>
                            <p>Front-end development: React, Redux, Redux-Saga, TypeScript, JavaScript, CSS, HTML, Docker, Cypress, Jest</p>
                            <p>Back-end: Node JS API server development. Created and Maintained API code, interfacing with MongoDB, Redis, and Salesforce.</p>
                            <p>Created a Telehealth application that allowed users to schedule and join video meetings using the Zoom SDK.</p>
                        </li>
                        <li>
                            <h3>VoiceBase, San Francisco CA - Senior UI Developer</h3>
                            <p><strong>May 2019 to March 2020</strong></p>
                            <p>Focused on creating and maintaining ReactJS applications. Agile.</p>
                            <p>Front-end development: React, Redux, Redux-Saga, JavaScript, CSS, HTML</p>
                            <p>Created an Analytics Portal, with pages for Groups, Users, Accounts, Categories, and Analytics Dashboards.</p>
                            <p>Worked on upgrading and maintaining the Player app which synced audio playback with voice transcription, highlighting each word as it is spoken.</p>
                        </li>
                        <li>
                            <h3>Bank of America/Apex Systems, San Francisco CA - Full Stack Python Developer</h3>
                            <p><strong>December 2017 to December 2018 (1 year contract)</strong></p>
                            <p>Focused on improving the User Interface of existing pages as well as developing new internal applications for verifying and approving financial models.</p>
                            <p>Front-end development: HTML, CSS, JavaScript. The JavaScript is mostly Jquery and native programming with some work in ReactJS.</p>
                            <p>Back-end development: Python/Flask/Jinja2 environment</p>
                            <p>Database development SQLServer</p>
                        </li>
                        <li>
                            <h3>Healthline Inc, San Francisco, CA - Senior UI Developer</h3>
                            <p><strong>June 2014 to December 2017</strong></p>
                            <p>Designed and Developed UI and Front end engineering for the healthline.com website, as well as Healthline’s mobile apps. Agile.</p>
                            <p>Worked with AngularJS and had some training on ReactJS.</p>
                            <p>IOS Swift and Ionic developer for Healthline.com apps such as MSBuddy, and Knee-Gym.</p>
                            <p>Assisted in the development of the Android versions of our apps.</p>
                            <p>Created a tool that would parse a pasted Word Document table and convert it to a responsive web table for our editors to include in articles on our site.</p>
                            <p>Created iPhone apps for Healthline’s annual Hackathon and placed in the top 3 in both years that I participated.</p>
                        </li>
                        <li>
                            <h3>triporati.com, San Francisco, CA - Senior UI Developer</h3>
                            <p><strong>Nov 2011 to May 2014</strong></p>
                            <p>Designed and developed UI and front-end engineering for the Triporati website and all cobranded websites.</p>
                            <p>Updated the look and feel of the Triporati.com website www.triporati.com</p>
                            <p>Designed and implemented a brand-new interface as well as new functionality.</p>
                            <p>Created mockups using Photoshop for proof of concept and presentations.</p>
                            <p>Created ads and ad-sized interactive widgets to be shown on partner websites.</p>
                            <p>Created many cobranded websites for Triporati deals with Expedia, Hotwire, Huffington Post, Thomas Cook, Priceline, Orbitz, and 3 regional AAA websites. Customized the look and feel to match the partner’s aesthetic, and created new functionality as required for the particular co-brand deal.</p>
                        </li>
                        <li>
                            <h3>Walmart.com, Brisbane, CA - Full Stack Java Engineer</h3>
                            <p><strong>Apr 2004 to Nov 2011</strong></p>
                            <p>Designed and programmed UI and server-side software for Web applications for a high volume e-commerce site (www.walmart.com).</p>
                            <p>Implemented the UI on new and existing JSP/HTML pages.</p>
                            <p>Developed drop-down menu and dynamic tabs widgets using JavaScript & DHTML/CSS.</p>
                            <p>Bug fixing and assisting other developers in resolving client-side user interface issues.</p>
                            <p>Created XSLT style sheets for transforming XML data into HTML.</p>
                            <p>Developed Server Side Java in a Struts/Tiles/J2EE environment.</p>
                        </li>
                        <li>
                            <h3>Providian Financial, San Francisco, CA - Full Stack Java Engineer</h3>
                            <p><strong>Feb 2001 to Mar 2004</strong></p>
                            <p>Development and maintenance of an e-commerce system that has over 3 million registered users as well as project management.</p>
                            <p>Led many projects while at Providian including the redesign of the application to allow the web pages to dynamically re-brand themselves based on the brand of the customer's credit card.</p>
                            <p>Developed JSP pages. Created custom JSP Tags. Created and edited pages using HTML, JavaScript, and CSS.</p>
                            <p>Performed application support: Being on call to diagnose and fix errors in the application by looking through the server and application logs to identify where and why errors were thrown.</p>
                            <p>Created Business objects to perform business logic and connect to outside data-sources using JDBC (SQL and Stored procedures) and XML.</p>
                            <p>Created and edited Servlets. Created Controller functionality using both an in-house MVC structure as well as Struts.</p>
                            <p>Created custom tools in Swing/AWT to assist developers.</p>
                            <p>Used SQL-Programmer Plus to view database tables, stored procedures, and write SQL statements to access data from an Oracle 8i Database.</p>
                            <p>Project management, managing teams of up to 7 people. Used MS Project to scope work and manage timelines for projects.</p>
                            <p>Created and maintained technical documentation for the applications that I worked on.</p>
                        </li>
                    </ul>
                </div>

                <div className="education section">
                    <h2>EDUCATION</h2>
                    <ul>
                        <li>
                            <p>Graduated from Drake High School in San Anselmo, CA</p>
                        </li>
                        <li>
                            <p>Majored in Computer Science at the College of Marin in Kentfield, CA</p>
                        </li>
                    </ul>
                </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </>
  )
}

export default ResumePage;