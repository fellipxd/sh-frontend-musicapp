import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="s-container">
      <div className="s-signup">
        <h2>Sign in to Muzira</h2>
        <button className="s-btn s-btn-2" type="button">
          <FcGoogle />
          <span>Continue With Google</span>
        </button>
        <span className="s-span-1">OR</span>
        <div className="s-inputContainer">
          <Input type="email" placeholder="Email Address " />
          <Input type="password" placeholder="Create Password " />
          <Input type="password" placeholder="Confirm Password " />
          <Input type="text" placeholder="Enter Profile Name " />
        </div>
        <div>
          <p>What is your date of birth</p>
          <div>
            <Input type="month" />
          </div>
        </div>
        <div>
          <p>Gender</p>
          <div>
            <input type="radio" name="gender" value="Male" />
            <input type="radio" name="gender" value="Female" />
            <input type="radio" name="gender" value="Prefer not to say" />
          </div>
        </div>
        <p className="s-center">
          By clicking on sign-up you agree fully to the terms and conditions and
          privacy policy
        </p>
        <button className="s-btn s-btn-1" type="button">
          SIGN UP
        </button>
        <span className="s-span-2">
          Have an account?
          <Link href="login">Log in</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
