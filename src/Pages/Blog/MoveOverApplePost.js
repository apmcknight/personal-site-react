import '../../App.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PostData from './posts.json'

function MoveOverApplePost() {

  return (
    <div className="ContentTemplate">
      <Navbar />

      {PostData.map((posts, index)=>{
        return<h1>{posts.content}</h1>
      })}

      <button className="TagButton">Tag</button>
      <h1>This compiles really fast!</h1>
      <p className="ContentParagrpah"></p>


      
      <Footer />
    </div>
    
    
  );
}

export default MoveOverApplePost;
