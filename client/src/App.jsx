import './App.css';
import {BrowserRouter as Router,Routes as Switch,Route} from "react-router-dom";
import Room from './session/room';
import Home from './home/home';
import Auth from './auth/auth';
function App() {
  return (
    <div className='flex-row bg-primary'>
      <Router>
        <Switch>
        
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/login" element={<h1>Hello</h1>} />
        <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Home />} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
