import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../components/ButtonElement";

const Login = () => {
  return (
    <div className="s-container">
      <div className="s-signin">
        <h2>Login to Muzira</h2>
        <div className="s-inputContainer">
          <Input type="email" placeholder="Email Address " />
          <Input type="password" placeholder="Password " />
        </div>
        <p className="s-p s-purple">Forgot Password?</p>
        {/* <button className="s-btn s-btn-1" type="button">
          <Link to="/root">LOGIN</Link>
        </button> */}
        <Button
          primary="true"
          light="true"
          fontBig="true"
          big="true"
          widthBig="true"
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
