import { FcGoogle } from "react-icons/fc";
// import Input from "../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../components/ButtonElement";
import { useContext } from "react";
import AppContext from "../state/context";

const Login = () => {
  const { email, password, setEmail, setPassword } = useContext(AppContext);

  return (
    <div className="s-container">
      <div className="s-signin">
        <h2>Login to Muzira</h2>
        <div className="s-inputContainer">
          <input
          className="s-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <input
          className="s-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password "
          />
        </div>
        <p className="s-p s-purple">Forgot Password?</p>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            primary="true"
            light="true"
            fontBig="true"
            big="true"
            onClick={() => {
              console.log("clicked", email, password);
            }}
          >
            Test
          </Button>
        </div> */}
        <Button
          primary="true"
          light="true"
          fontBig="true"
          big="true"
          widthBig="true"
          // onSubmit={handleSubmit}
        >
          <Link to="/root">LOGIN</Link>
        </Button>
        <span className="s-span-1">or</span>
        <button className="s-btn s-btn-2" type="button">
          <FcGoogle />
          <span>Continue With Google</span>
        </button>
        <p>
          <span className="s-span-2">
            Don't have an account?
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
