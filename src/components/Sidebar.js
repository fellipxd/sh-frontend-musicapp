import { Link } from "react-router-dom"
import "./tommy.css"
import logo from './images/m-logo.png'
import img1 from './images/Vector.svg'
import img2 from './images/Group.svg'
import img3 from './images/bxs_playlist.svg'
import img4 from './images/carbon_playlist.svg'
import img5 from './images/icon-park-outline_find.svg'
import img6 from './images/ic_baseline-favorite-border.svg'
import img7 from './images/bx_user-circle.svg'
import img8 from './images/bytesize_settings.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="Tom-image">
        <img src={logo} className="tom-image" alt=""/>
      </div>
     <div className="tom-link">
     <li className="link">
      <Link to="home" className="link"><img src={img1} className="t-i" alt=""/><span>Home</span></Link>
      </li>
     </div>  
     <div className="tom-link-2">
     <li className="link">
      <Link className="link"><img src={img2} className="t-2" alt=""/><span>Library</span></Link>
      </li>
     </div> 
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><img src={img3} className="t-i" alt=""/><span>Playlist</span></Link>
      </li>
     </div>
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><img src={img4} className="t-i" alt=""/><span>Create Playlist</span></Link>
      </li>
     </div>
     <div className="tom-link-4">
     <li className="link">
      <Link className="link"><img src={img5} className="t-i" alt=""/><span>Browse Categories</span></Link>
      </li>
     </div>
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><img src={img6} className="t-i" alt=""/><span>Favorite Songs</span></Link>
      </li>
     </div>
     <div className="tom-link-3">
     <li className="link">
      <Link className="link"><img src={img7} className="t-i" alt=""/><span>User Profile</span></Link>
      </li>
     </div>
     <div className="tom-link-4">
     <li className="link">
      <Link className="link"><img src={img8} className="t-i" alt=""/><span>Setting</span></Link>
      </li>
     </div>
    </div>
  )
}

export default Sidebar