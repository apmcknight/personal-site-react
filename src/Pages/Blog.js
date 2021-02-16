import '../App.css';
import Navbar from '../Components/Navbar';
import BlogList from '../Components/BlogList';
import Footer from '../Components/Footer';


function Blog() {
  return (
    <div className="Work">
      <Navbar />
      <h1>Blog</h1>
      <BlogList />
      <Footer />
    </div>
  );
}

export default Blog;
