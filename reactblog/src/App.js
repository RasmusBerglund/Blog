import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './componets/Home/home'
import About from './componets/About/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my blog</h1>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
