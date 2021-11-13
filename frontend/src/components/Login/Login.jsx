
import BottomNav from "../Utils/BottomNav";
import Button from "../Utils/Button";
import LoginHeaderImage from "./LoginHeaderImage.png";
import "./login.css";

function Login() {
    return (
        <div>
            <div className="headerimagecontainer">
            <img src={LoginHeaderImage} alt="LookO Login"/>
            </div>
            
            <Button text="CONTINUE"/>
            <Button text="CONTINUE" className="googleauth"/>
      <BottomNav />
        </div>
    )
}

export default Login
