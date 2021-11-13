import "./header.css";
import logo from "./icons/headerlogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
      <div id="headerbody">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div id="logotext">LookO</div>
      </div>
      <div className="border"></div>
      </Link>
    </div>
  );
};

export { Header };
