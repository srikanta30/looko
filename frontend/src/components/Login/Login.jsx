
import BottomNav from "../Utils/BottomNav";
import Button from "../Utils/Button";
import LoginHeaderImage from "./LoginHeaderImage.png";
import "./login.css";

function Login() {
    return (
        <div>
        <div className="maincont">
            <div className="headerimagecontainer">
            <img src={LoginHeaderImage} alt="LookO Login"/>
            </div>
            <div>
                <h2>Login or Signup</h2>
            </div>
            <div>
                <input type="text" className="inputbox" placeholder="Mobile Number *"></input>
            </div>
            <div className="buttoncontainer">
            <Button text="CONTINUE"/>
            <a href="http://localhost:5000/auth/google">
            <div class="google-btn">
  <div className="google-icon-wrapper">
    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google"/>
  </div>
  <p class="btn-text"><b>Signin With Google</b></p>
</div>
</a>
<div className="finaltext">
    <p>By continuing, you agree to the <a href="/terms" className="link">Terms of Use</a> and <a href="/privacy" className="link">Privacy Policy</a>.</p>
</div>
</div>
     
        </div>
         <BottomNav />
         </div>
    )
}

export default Login
