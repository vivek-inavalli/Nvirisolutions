import icon from "../../images/icon.png";
import { Link } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  return (
    <div className="navcontainer">
      <img src={icon} className="icon" />
      <div className="buttons">
        <Link to="/business-login">
          <button className="navbutton1">Biz Login</button>
        </Link>
        <Link to="/login">
          <button className="navbutton2">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
