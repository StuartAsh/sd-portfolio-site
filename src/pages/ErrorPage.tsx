import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="glass-modal" style={{ width: '400px', height: '220px', margin: '100px auto'}}>
      <div className="glass-modal-header" style={{cursor: 'default'}}>
        <span><strong>404</strong> Page not found</span>
      </div>
      <div className="glass-modal-content">
        <div className="glass-modal-content-message">The page you have navigated to does not exist. 
          <p>I am sure it exists in another parallel universe, that is, if the infinite multiverse theory is true.</p>
          <p>But in this universe you are out of luck.</p></div>
        <div className="glass-modal-footer">
          <Link to="/"><button style={{marginLeft: '-100px'}}>Return to the Homepage</button></Link>
        </div>
      </div>  
    </div> 
  );
}