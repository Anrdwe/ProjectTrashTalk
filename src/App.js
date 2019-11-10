import React from 'react';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Board from './Board';
import Contact from './Contact';
import Post from './Post';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post" component={Post} />
        </Switch>
      </div>
    </Router >
  );
} 

export default App;
