import React from 'react';

import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms/" component={Rooms} />
    <Route exact  path="/rooms/:slug" component={SingleRoom} />
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;

// MINUTUL 04:50 https://www.youtube.com/watch?v=ScDWrogElmo&list=PLMn2YofH3rCfawOVy3Y4m5JNvM6mlEAwb&index=6