import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About.js";
import Training from "./pages/Training.js";
import Profile from "./pages/Profile.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import Oops from "./pages/Oops.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        console.log(`user: ${JSON.stringify(user)}`);
        setUserId(user._id);
        setUserName(user.name);
        setIsLoggedIn(true);

      }
    }).then(() => {
      setIsLoaded(true);
    }, [isLoggedIn]);
  }, []);


  useEffect(() => {
    console.log(`logged in: ${userId}`);
  }, [userId]);

  const handleLogin = (res) => {
    setUserName(res.profileObj.name);
    console.log(`Logged in as ${userName}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
    setIsLoggedIn(false);
    setUserName(undefined);
  };

  return (
    <>
      <NavBar userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
      <div className="">
        <Router>
          <Home path="/" userId={userId} handleLogin={handleLogin} handleLogout={handleLogout}/>
          <About path="/about/" />
          <Profile path="/profile/:userId" userName={userName} isLoggedIn={isLoggedIn} isLoaded={isLoaded}/>
          <Training path="/training/" />
          <Oops path="/oops" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
