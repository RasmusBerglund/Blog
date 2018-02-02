import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import sanity from './lib/sanity';
import { BlogList } from './componets/blogList'
import Home from './componets/Home/home'
import About from './componets/About/about'

var Loader = require('react-loader');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    await sanity
      .fetch(
      '*[_type == $type][0...5]',
      { type: 'post' }
      )
      .then(res => {
        this.setState({ posts: res, loaded: true })
        console.log(res)
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }

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
          <Loader loaded={this.state.loaded} className="App-intro">
            <BlogList posts={this.state.posts} />
          </Loader>
        </div>
      </div>
    );
  }
}

export default App;
