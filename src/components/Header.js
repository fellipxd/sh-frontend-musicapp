import { ReactComponent as NotificationIcon } from "./icons/notification.svg";
import { TbCloudUpload } from "react-icons/tb";

const Header = ({ toggleUpload }) => {
  return (
    <div className="header">
      <div className="input-div">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 25L19.3335 19.3234M22.4737 11.7368C22.4737 14.5844 21.3425 17.3154 19.3289 19.3289C17.3154 21.3425 14.5844 22.4737 11.7368 22.4737C8.88925 22.4737 6.1583 21.3425 4.14475 19.3289C2.1312 17.3154 1 14.5844 1 11.7368C1 8.88925 2.1312 6.1583 4.14475 4.14475C6.1583 2.1312 8.88925 1 11.7368 1C14.5844 1 17.3154 2.1312 19.3289 4.14475C21.3425 6.1583 22.4737 8.88925 22.4737 11.7368Z"
            stroke="#474747"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <input type="text" placeholder="Artists, Songs, Lyrics and more" />
      </div>
      <div className="profile">
        <div className="upload cursor-pointer">
          <TbCloudUpload onClick={toggleUpload} />
        </div>
        <div>
          <NotificationIcon />
        </div>
        <div className="profile-ellipse">
          <img src="/images/profile.png" alt="profile img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
