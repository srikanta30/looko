import arrowkey from "./icons/Leftarrow.svg";
import Pencil from "./icons/Pencil.svg";
//import Profilepic from "./icons/Profile.svg";
import "./EditProfile.css";
import Button from "../Utils/Button";
import BottomNav from "../Utils/BottomNav";
import {Link} from "react-router-dom";

export const EditProfile = () => {
  return (
    <div id="main">
      <div id="cover">
        <div id="arrow">
          {/* onclicking this div it will go one page back */}
          <Link to="/account"><img src={arrowkey} alt="arrow-key" /></Link>
        </div>
      </div>
      <div id="pfp">
        <div id="edit">
          <img src={Pencil} alt="pencil" />
        </div>
        <div id="pic">
          <img src="https://pbs.twimg.com/profile_images/1449022166930919432/6YdCe7WM_400x400.jpg" alt="pfp" />
        </div>
      </div>
      <div id="form">
        <div>
          <label className="labeltext">Mobile Number</label>
          <br />
          <input className="ip" type="text" placeholder="+91813938716" />
        </div>
        <div>
          <label className="labeltext">Full Name</label>
          <br />
          <input className="ip" type="text" placeholder="Srikanta Banerjee" />
        </div>
        <div>
          <label className="labeltext">Email</label>
          <br />
          <input className="ip" type="text" placeholder="srikantabanerjee30@gmail.com" />
        </div>
        <div id="btns">
          <button
            id="fem"
            onClick={() => {
              document.getElementById("fem").style.backgroundColor = "#F5617F";
              document.getElementById("fem").style.color = "white";
              document.getElementById("ma").style.backgroundColor = "white";
              document.getElementById("ma").style.color = "black";
            }}
          >
            Female
          </button>
          <button
            id="ma" style={{backgroundColor: "#F5617F", color: "white"}}
            onClick={() => {
              document.getElementById("ma").style.backgroundColor = "#F5617F";
              document.getElementById("ma").style.color = "white";
              document.getElementById("fem").style.backgroundColor = "white";
              document.getElementById("fem").style.color = "black";
            }}
          >
            Male
          </button> 
        </div>
        <Button text="UPDATE"></Button>
      </div>
      <BottomNav />
    </div>
  );
};
