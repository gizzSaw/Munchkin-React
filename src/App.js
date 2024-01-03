import './App.css';
import { Header } from './components/Header/Header';
import { PlayersList } from './components/PlayersList/PlayersList';

function App() {
  return (
    <div className="App">
      <Header/>
      <PlayersList/>
    </div>
  );
}

export default App;
