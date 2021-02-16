import '../App.css';
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import Recent from '../Components/Recent';
import Projects from '../Components/Projects';
import Log from '../Components/Log';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="Home">
      <div class="HomeBackground">.</div>
      <Navbar />
      <Intro />
      <Recent />
      <Projects />
      <Log />
      <Footer />
    </div>
  );
}

export default Home;
