import { FcGoogle } from "react-icons/fc";
// import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ButtonElement";
import { useContext } from "react";
import AppContext from "../state/context";

const Signup = () => {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    profileName,
    setProfileName,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    errMessage,
    setErrMessage,
    successMessage,
    setSuccessMessage,
    gender,
    setGender
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      email,
      password,
      confirmPassword,
      profileName,
      day,
      month,
      year,
      gender
    };

    console.log(result);

    fetch("https://muzira.shbootcamp.com.ng/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => {
        return res.json();
        // console.log(res.json())
      })
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          setErrMessage(data.message);
          setTimeout(() => {
            setErrMessage("")
          }, 3000)
        } else {
          setSuccessMessage(data.message);
          setTimeout(() => {
            navigate("/login");
            setSuccessMessage("");
            setEmail("");
            setPassword("");
          }, 3000);
        }
      });
  };

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
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="s-input"
            type="email"
            placeholder="Email Address "
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="s-input"
            type="password"
            placeholder="Create Password "
          />
          <input
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="s-input"
            type="password"
            placeholder="Confirm Password "
          />
          <input
            value={profileName}
            onChange={(e) => {
              setProfileName(e.target.value);
            }}
            className="s-input"
            type="text"
            placeholder="Enter Profile Name "
          />
        </div>
        <div className="mt-1">
          <p>What is your date of birth</p>
          <span className="s-flex">
            <input
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
              type="text"
              placeholder="Day"
              className="s-input-2"
            />
            <input
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              type="text"
              placeholder="Month"
              className="s-input-3"
            />
            <input
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              type="text"
              placeholder="Year"
              className="s-input-4"
            />
          </span>
        </div>
        <div className="mt-1">
          <p>Gender</p>
          <div className="labelContainer">
            <div>
              <input
                className="s-input"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                className="s-input"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                className="s-input"
                type="radio"
                id="others"
                name="gender"
                value="Prefer not to say"
                checked={gender === "Prefer not to say"}
                onChange={() => setGender("Prefer not to say")}
              />
              <label htmlFor="others">Prefer not to say</label>
            </div>
          </div>
        </div>
        <p className="s-center">
          By clicking on sign-up you agree fully to the terms and conditions and
          privacy policy
        </p>
        <Button
          primary="true"
          light="true"
          fontBig="true"
          big="true"
          widthBig="true"
          onClick={handleSubmit}
        >
          SIGN UP
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "capitalize",
            marginTop: "1rem",
          }}
        >
          <span style={{ color: "red" }}>{errMessage}</span>
          <span style={{ color: "green" }}>{successMessage}</span>
        </div>
        <span className="s-span-2">
          Have an account?
          <Link to="/login">Log in</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
