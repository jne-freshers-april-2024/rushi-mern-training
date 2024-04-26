import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container-fluid"> 
        <Link className="navbar-brand" to="/"> 
          Todo's  
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown"> 
          <ul className="navbar-nav"> 
            <li className="nav-item"> 
              <Link className="nav-link active" aria-current="page" to="/todo"> 
                Todo
              </Link>
            </li>

            <li className="nav-item"> 
              <Link className="nav-link active" aria-current="page" to="/usertodo"> 
                UserTodo
              </Link>
            </li>
            
            <li className="nav-item"> 
              <Link className="nav-link active" to="/contact"> 
                Contact Us
              </Link>
            </li>

            <li className="nav-item"> 
              <Link className="nav-link active" to="/signin"> 
                Sign In
              </Link>
            </li>

            <li className="nav-item"> 
              <Link className="nav-link active" to="/signup"> 
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
