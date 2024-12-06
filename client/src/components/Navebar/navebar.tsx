import { Link } from "react-router-dom";
import "./navbar.css";

const Navebar = () => {
  return (
    <div className="nabar">
      <Link to={"/"}>Home</Link>
      <Link to={"/Contacte"}>Contact</Link>
      <Link to={"/About"}>About</Link>
    </div>
  );
};

export default Navebar;
