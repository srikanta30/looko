import "./ProfileImage.css";
import profileImages from "../icons/Group 17.svg";
import { Link } from "react-router-dom";
export const ProfileImage = () => {
  return (
    <Link to="/profile">
      <div className="image_div">
        <img src="https://pbs.twimg.com/profile_images/1449022166930919432/6YdCe7WM_400x400.jpg" className="profile_image" width="112px" height="112px" alt="profile_image" />
      </div>
    </Link>
  );
};
