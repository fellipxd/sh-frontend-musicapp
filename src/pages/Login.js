import { FcGoogle } from "react-icons/fc";
// import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ButtonElement";
import { useContext, useState } from "react";
import AppContext from "../state/context";

const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState("LOGIN");

  const {
    email,
    password,
    setEmail,
    setPassword,
    errMessage,
    setErrMessage,
    successMessage,
    setSuccessMessage,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      email,
      password,
    };

    console.log(result);
    setIsLoading("Loading...");

    fetch("https://muzira.shbootcamp.com.ng/signin.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          setErrMessage(data.message);
          setTimeout(() => {
            setErrMessage("");
            setIsLoading("LOGIN");
          }, 3000);
        } else {
          setSuccessMessage(data.message);
          sessionStorage.setItem("sessionId", data.user_id);
          console.log(data.user_id);
          setTimeout(() => {
            navigate("/root/home");
            setSuccessMessage("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrMessage("Wrong login details");
        setTimeout(() => {
          setIsLoading("LOGIN");
          setErrMessage("");
        }, 3000);
      });
  };

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
        <Button
          primary="true"
          light="true"
          fontBig="true"
          big="true"
          widthBig="true"
          onClick={handleSubmit}
        >
          {isLoading}
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
