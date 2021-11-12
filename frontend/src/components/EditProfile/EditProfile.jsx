import arrowkey from "./icons/Leftarrow.svg";
import Pencil from "./icons/Pencil.svg";
import Profilepic from "./icons/Profile.svg";
import "./EditProfile.css";
import Button from "../Utils/Button";

export const EditProfile = () => {
  return (
    <div id="main">
      <div id="cover">
        <div id="arrow">
          {/* onclicking this div it will go one page back */}
          <img src={arrowkey} alt="arrow-key" />
        </div>
      </div>
      <div id="pfp">
        <div id="edit">
          <img src={Pencil} alt="pencil" />
        </div>
        <div id="pic">
          <img src={Profilepic} alt="pfp" />
        </div>
      </div>
      <div id="form">
        <div>
          <label class="labeltext">Mobile Number</label>
          <br />
          <input class="ip" type="text" placeholder="" />
        </div>
        <div>
          <label class="labeltext">Full Name</label>
          <br />
          <input class="ip" type="text" placeholder="" />
        </div>
        <div>
          <label class="labeltext">Email</label>
          <br />
          <input class="ip" type="text" placeholder="" />
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
            id="ma"
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
    </div>
  );
};
