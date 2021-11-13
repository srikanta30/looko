import "./ProfileImage.css";
import profileImages from "../icons/Group 17.svg";
export const ProfileImage = () => {
  return (
    <div className="image_div">
      <img src={profileImages} className="profile_image" width="112px" height="112px" alt="profile_image" />
    </div>
  );
};
