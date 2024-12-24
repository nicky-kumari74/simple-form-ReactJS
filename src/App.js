
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>Props in React :</h1>
      <User name={"nicky"} email="nicky@gmail.com"/>
      <User name={"ajay"} email="ajay@gmail.com"/>
    </div>
  );
}

export default App;
