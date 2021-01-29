import React, { useEffect } from "react";
import "./css/App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Components/Login";
import { auth } from "./firebase";
import Widgets from "./Components/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            // set the email, uid etc from or REDUX store and set to the firebase auth.
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
