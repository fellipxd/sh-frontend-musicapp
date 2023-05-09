import { BiHomeAlt2, BiUserCircle } from "react-icons/bi";
import { ImFileMusic } from "react-icons/im";
import { RiPlayListFill } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { CgPlayList, CgPlayListSearch } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { ReactComponent as MenuIcon } from "../components/icons/sidebar-icon.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 h-full bg-purple-900 text-white py-4">
      <div className="flex items-center justify-center">
        <MenuIcon />
      </div>
      <div className="flex flex-col gap-10 h-full">
        <div className="flex flex-col gap-4">
          <NavLink exact to="home" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <BiHomeAlt2 />
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink exact to="library" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <ImFileMusic />
              <span>Library</span>
            </div>
          </NavLink>
          <NavLink exact to="playlist" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <RiPlayListFill />
              <span>Playlist</span>
            </div>
          </NavLink>
          <NavLink exact to="empty" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <CgPlayList />
              <span>Create Playlist</span>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col gap-4">
          <NavLink exact to="categories" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <CgPlayListSearch />
              <span>Browse categories</span>
            </div>
          </NavLink>
          <NavLink exact to="empty" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <BsHeart />
              <span>Favorite songs</span>
            </div>
          </NavLink>
          <NavLink exact to="profile" activeClassName="active">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <BiUserCircle />
              <span>User profile</span>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink exact to="empty" activeClassName="empty">
            <div className=" border-l-[8px] px-4 border-transparent w-full flex items-center gap-4">
              <FiSettings />
              <span>Settings</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
