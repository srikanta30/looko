import imgProfileDetails from "./icons/healthicons_person-outline.svg";
import imgHelpCenter from "./icons/healthicons_people-outline.svg";
import imgReferToFriends from "./icons/iconoir_headset-help.svg";
import "./account.css";
import { Header } from "../Utils/Header";
import BottomNav from "../Utils/BottomNav";
import { ProfileImage } from "./ProfileImage/ProfileImage";

function Account() {
  return (
    <div>
      <Header />

      <div className="top_div"></div>

      <div className="second_div">
        <div className="username_div">User Name</div>
      </div>

      <div className="div_profile_details">
        <div className="dark_circle">
        <img src={imgProfileDetails} alt=""/>
        </div>
        <div className="profile_details">Profile Details</div>
        <div className="Arrow_div">&gt;</div>
      </div>

      <div className="div_help_center">
        <div className="dark_circle">
          <img src={imgHelpCenter} alt=""/>
        </div>
        <div className="help_center">Help Center</div>
        <div className="Arrow_div">&gt;</div>
      </div>

      <div className="div_refer_friends">
        <div className="dark_circle">
        <img src={imgReferToFriends} alt=""/>
        </div>
        <div className="refer_friends">Refer Your Friends</div>
        <div className="Arrow_div">&gt;</div>
      </div>

      <div className="third_div">
        <div className="div_about_us">About us</div>
        <div className="div_terms_of_use">Terms of use</div>
        <div className="div_privacy_policy">Privacy policy</div>
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
