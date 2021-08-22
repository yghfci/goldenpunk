import './App.css';
import {Navigator} from './screens/header';
import {Home} from './screens/home'

function App() {
  return (
    <div className="App">
      <Navigator />
      <Home/>
      
    </div>
  );
}

export default App;