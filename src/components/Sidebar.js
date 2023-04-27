import { Link } from "react-router-dom"
import "./tommy.css"
import { BiHomeAlt2 } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import { RiPlayListFill } from "react-icons/ri";
import { MdPlaylistPlay } from "react-icons/md";
import { CgPlayListSearch } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import logo from './images/m-logo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="Tom-image">
        <img src={logo} className="tom-image" alt=""/>
      </div>
     <div className="tom-link">
     <li className="link">
      <Link className="link"><BiHomeAlt2 className="tom-icon"/><span>Home</span></Link>
      </li>
     </div>  
     <div className="tom-link-2">
     <li className="link">
      <Link className="link"><SiApplemusic className="tom-icon"/><span>Library</span></Link>
      </li>
     </div> 
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><RiPlayListFill className="tom-icon"/><span>Playlist</span></Link>
      </li>
     </div>
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><MdPlaylistPlay className="tom-icon"/><span>Create Playlist</span></Link>
      </li>
     </div>
     <div className="tom-link-4">
     <li className="link">
      <Link className="link"><CgPlayListSearch className="tom-icon"/><span>Browse Categories</span></Link>
      </li>
     </div>
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><AiOutlineHeart className="tom-icon"/><span>Favorite Songs</span></Link>
      </li>
     </div>
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><CgProfile className="tom-icon"/><span>User Profile</span></Link>
      </li>
     </div>
     <div className="tom-link-4">
     <li className="link">
      <Link className="link"><AiOutlineSetting className="tom-icon"/><span>Setting</span></Link>
      </li>
     </div>
    </div>
  )
}

export default Sidebar