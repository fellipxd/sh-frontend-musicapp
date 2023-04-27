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
        <div className="mt-1">
          <p>What is your date of birth</p>
          <span className="s-flex">
            <input type="text" placeholder="Day" className="s-input-2" />
            <input type="text" placeholder="Month" className="s-input-3" />
            <input type="text" placeholder="Year" className="s-input-4" />
          </span>
        </div>
        <div className="mt-1">
          <p>Gender</p>
          <div className="labelContainer">
            <div>
              <Input type="radio" id="male" name="gender" value="Male" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <Input type="radio" id="female" name="gender" value="Female" />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <Input
                type="radio"
                id="others"
                name="gender"
                value="Prefer not to say"
              />
              <label htmlFor="others">Prefer not to say</label>
            </div>
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
          <Link to="/login">Log in</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
