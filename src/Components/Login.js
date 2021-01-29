import React, { useState } from "react";
import LinkedInLogoText from "../images/linkedIn-text-logo.png";
import "../css/Login.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // when you sign in you get a userAth object that we want to pass into the redux store
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.name,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const handleRegister = () => {
    if (!name) {
      alert("Please put your name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            // push the user into the redux store
            dispatch(
              login({
                // login from the userSlice
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={LinkedInLogoText} alt="" />
      <div className="login__container">
        <h2>Sign in</h2>
        <small>
          This is just for demo purposes so your name can be anything and your
          email can be whatever you like but still in email format
          (tets@test.com). First time here fill out the details and press the
          "register" at the bottom.
        </small>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={handleRegister}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
