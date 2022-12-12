import './App.css';
import Menu from './Menu'
import Cover from './Cover'
import About from './About'
import PlayerList from './PlayerList'
import NextGames from './NextGames'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Menu id="id--Home" />
      <Cover />
      <About id="id--About" />
      <PlayerList id="id--Players" />
      <NextGames id="id--Games" />
      <Footer />
    </div>
  );
}

export default App;
