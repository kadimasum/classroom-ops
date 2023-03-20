import logo from './logo.svg';
import './App.css';
import HomePage from './homepage/homepage';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' Component={HomePage}/>
      </Routes>
 
    </div>
  );
}

export default App;
