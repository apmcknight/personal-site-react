import '../App.css';
import Navbar from '../Components/Navbar';
import WorkList from '../Components/WorkList';
import Footer from '../Components/Footer';


function Contact() {
  return (
    <div className="Work">
      <Navbar />
      <h1>Want to have a chat, or a virtural cup of coffee?</h1>
      <h3>You can reach out to me in a verity of ways...</h3>
      <ol>
        <li>
          Send me an E-Mail to: <a href="mailto:adam.mcknight.digital" style={{textDecoration: "underline", fontWeight: "bold"}}>adam@mcknight.digital</a>
        </li>
        <li>
          Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/adammcknight" target="_blank">
            @adammcknight
          </a>
        </li>
        <li>
          Find me on GitHub <a href="https://www.github.com/apmcknight" target="_blank" style={{textDecoration: "underline", fontWeight: "bold"}}>@apmcknight</a>
        </li>

      </ol> 

      <Footer />
    </div>
  );
}

export default Contact;
