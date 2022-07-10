import logo from './logo.svg';
import './App.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Navbar />
        <Header slogan="Hello Closet!" storename="Keep track of your favorite outfits"/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
