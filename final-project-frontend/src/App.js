import './App.css';
import Home from './Home'
import Header from "./Header.js";

function App() {
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
            <Login /> 
            </Route>
            <Route path="/logout">
              <Logout /> 
            </Route>
            <Route path="/profile">
              <Profile /> 
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
            <Route path="/newitem">
              <ItemForm />
            </Route>
            <Route path="/newoutfit">
              <OutfitForm />
            </Route>
            <Route path="/newcollection">
              <CollectionForm />
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