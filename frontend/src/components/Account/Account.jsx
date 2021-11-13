import imgProfileDetails from "./icons/healthicons_person-outline.svg";
import imgHelpCenter from "./icons/healthicons_people-outline.svg";
import imgReferToFriends from "./icons/iconoir_headset-help.svg";
import "./account.css";
import { Header } from "../Utils/Header";
import BottomNav from "../Utils/BottomNav";
import { ProfileImage } from "./ProfileImage/ProfileImage";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <Header />

      <div className="top_div"></div>

      <div className="second_div">
        <div className="username_div">Srikanta</div>
      </div>

      <Link to="/profile">
        <div className="div_profile_details">
          <div className="dark_circle">
          <img src={imgProfileDetails} alt=""/>
          </div>
          <div className="profile_details">Profile Details</div>
          <div className="Arrow_div">&gt;</div>
        </div>
      </Link>

      <Link to="/help">
        <div className="div_help_center">
          <div className="dark_circle">
            <img src={imgHelpCenter} alt=""/>
          </div>
          <div className="help_center">Help Center</div>
          <div className="Arrow_div">&gt;</div>
        </div>
      </Link>

      <Link to="/refer">
        <div className="div_refer_friends">
          <div className="dark_circle">
          <img src={imgReferToFriends} alt=""/>
          </div>
          <div className="refer_friends">Refer Your Friends</div>
          <div className="Arrow_div">&gt;</div>
        </div>
        </Link>

      <div className="third_div">
        <Link to="/about">
          <div className="div_about_us"><a>About us</a></div>
        </Link>

        <Link to="/terms">
          <div className="div_terms_of_use"><a>Terms of use</a></div>
        </Link>

        <Link to="/privacy">
          <div className="div_privacy_policy"><a>Privacy policy</a></div>
        </Link>
      </div>

      <ProfileImage />

      <div className="div_log_out_btn">
        <button className="log_out_btn">LOG OUT</button>
      </div>

      <BottomNav />
    </div>
  );
}

export default Account;
