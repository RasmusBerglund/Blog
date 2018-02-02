import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './componets/Home/home'
import About from './componets/About/about'
import Post from './componets/Post/post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my blog</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About</NavLink>
        </header>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/post" component={Post} />
        </div>
      </div>
    );
  }
}

export default App;
