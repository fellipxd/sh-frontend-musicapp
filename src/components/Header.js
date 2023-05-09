import { ReactComponent as NotificationIcon } from "./icons/notification.svg";
import { TbCloudUpload } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

const Header = ({ toggleUpload }) => {
  return (
    <div className="flex w-full justify-center items-center relative">
      <div className="flex justify-between items-center w-full sticky top-2">
        <div className="flex border-2 p-2 border-gray-300 w-3/5 gap-2 items-center">
          <label htmlFor="search" className="text-gray-500 text-2xl">
            <FiSearch />
          </label>
          <input
            type="search"
            id="search"
            placeholder="Artists, Songs, Lyrics and more"
            className="bg-transparent w-full placeholder:text-gray-500"
          />
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
    </div>
  );
};

export default Header;
