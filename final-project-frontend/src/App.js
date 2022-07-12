import './App.css';
import React, { useEffect, useContext, useHistory  } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {UserContext} from './Context/user';
import Home from './Home';
import Header from "./Header.js";
import NavBar from "./Navbar";
import Notification from './Components/Notification';
import About from "./About.js";
// import Login from "./User/Login.js";
// import Logout from "./User/Logout";
// import Profile from "./User/Profile";


function App() {
  const {getCurrentUer, user} = useContext(UserContext)

  useEffect (() => {
    getCurrentUer()
  },[])

  return (
    <div className="App">
      <Router>
        <Notification/>
        <NavBar />
        <Header slogan="Share your short stories with the world!"/>
          <Switch>
            <Route path="/about">
              <About /> 
            </Route>
            <Route path="/login">
            {/* <Login />  */}
            </Route>
            <Route path="/logout">
              {/* <Logout />  */}
            </Route>
            <Route path="/profile">
              {/* <Profile />  */}
            </Route>
            <Route path="/signup">
              {/* <SignUpForm /> */}
            </Route>
            <Route path="/newitem">
              {/* <ItemForm /> */}
            </Route>
            <Route path="/newoutfit">
              {/* <OutfitForm /> */}
            </Route>
            <Route path="/newcollection">
              {/* <CollectionForm /> */}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
  </div>
  );
}

export default App;