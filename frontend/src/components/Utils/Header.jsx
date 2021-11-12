import "./header.css";
import logo from "./icons/headerlogo.svg";

const Header = () => {
  return (
    <div>
      <div id="headerbody">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div id="logotext">LookO</div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export { Header };
