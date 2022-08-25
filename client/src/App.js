import './App.css';
import Members from './home/members';
import Menu from './home/menu';
import MyMessage from './message/myMessage';
import Player from './players/player';
function App() {
  return (
    <div className='flex-row bg-primary'>
      <Menu/>
      <Members />
      <MyMessage />
      <Player/>
    </div>
  );
}

export default App;
