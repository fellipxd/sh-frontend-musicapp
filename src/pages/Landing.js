import { Link } from "react-router-dom";
import { Button } from "../components/ButtonElement";
import { useState } from "react";
import { SlClose } from 'react-icons/sl'
const Landing = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  console.log(showMenu)
  return (
    <div id="container" className="landing">
      <img src="/images/top.png" alt="top" className="top" />
      <img src="/images/bottomright.png" alt="right" className="bottomright" />
      <img src="/images/bottomleft.png" alt="left" className="bottomleft" />
      <div className="landing-header">
        <div className="landing-logo">
          {" "}
          <img src="/images/logo.png" alt="logo" />
        </div>
        <nav className={showMenu ? "show" : "hide"}>
          <div className="close " onClick={toggleMenu}>
            <SlClose onClick={toggleMenu} />
          </div>

          <div className="landing-link">
            <Link to="#">Home</Link>
            <Link to="#">About Us</Link>
          </div>
          <div className="btn-wrapper">
            <Link to="/login">
              <Button primary="true" light="true">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="landing-content">
        <div className="left">
          <div className="left-desc">
            <h1>Discover your moods</h1>
            <p>
              Explore your music activities and generate new and exciting
              playlists without having to open your Muzira app at all
            </p>
            <button>Continue with Muzira</button>
          </div>
        </div>
        <div className="right">
          <img
            src="/images/kendrick.png"
            alt="Kendrick lamar"
            className="img-1"
          />
          <img src="/images/burna.png" alt="burna boy" className="img-2" />
          <img src="/images/rema.png" alt="rema" className="img-3" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
