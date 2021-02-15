import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Recent from './Components/Recent';
import Projects from './Components/Projects';
import Log from './Components/Log';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Recent />
      <Projects />
      <Log />
    </div>
  );
}

export default App;
