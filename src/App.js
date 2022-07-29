import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import User from './Components/User';
import MyJsx from './Components/MyJsx';
import ComponentA from './Components/ComponentA';
import ComponentB from './ComponentB';
import Destruct from './Destruct';


function App() {
  console.log('hhooo')
  var nameData = 'siraj'
  var myage = 20
  return (
    <div className="App">
      {/* <ComponentA name='Siraj' age={20} isActive={false} myObj={{title:'React Class',id:77}}><h1>my component</h1></ComponentA> */}
      <ComponentB />
      <Destruct  name={'siva'} age={20}/>
    </div>
  );
}

export default App;
