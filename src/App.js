import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import Uses from './Pages/Uses';
import MoveOverApplePost from './Pages/Blog/MoveOverApplePost';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashbaord';
import ContentTemplate from './Pages/ContentTemplate';


class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Home} />
       <Route exact path="/work/" component={Work} />
       <Route exact path="/blog/" component={Blog} />
       <Route exact path="/blog/post/uses" component={Uses} />
       <Route exact path="/blog/post/move-over-apple" component={MoveOverApplePost} />
       <Route exact path="/contact/" component={Contact} />
       <Route exact path="/dashboard/" component={Dashboard} />
       <Route exact path="/content-template/" component={ContentTemplate} />
       <Route exact path="/uses/" component={Uses} />
      </Router>
    );
  }
}

export default App;