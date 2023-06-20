import { LOGO_IMG_URL } from "../config";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link className="logo-container" to="/">
      <img className="logo" src={LOGO_IMG_URL} alt="logo" />
      <div className="title">Food Villa</div>
    </Link>
  );
};

const Header = ({ loggedIn }) => {
  return (
    <div className="navbar">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {loggedIn ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
