import '../App.css';
import Navbar from '../Components/Navbar';
import WorkList from '../Components/WorkList';
import Footer from '../Components/Footer';


function Work() {
  return (
    <div className="Work">
      <Navbar />
      <h1>Work</h1>
     
      <WorkList />
      <Footer />
    </div>
  );
}

export default Work;
