import './App.css';
import Home from './Home'
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <Header slogan="Share your short stories with the world!"/>
      <Home />
    </div>
  );
}

export default App;