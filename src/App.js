import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import User from './Components/User';


function App() {
  console.log('hhooo')
  return (
    <div className="App">
      <h1>hello Welcome</h1>
      <Welcome />
      <User />
      <h3>footer</h3>
    </div>
  );
}

export default App;
