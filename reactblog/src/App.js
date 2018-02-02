import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sanity from './lib/sanity';
import {BlogList} from './componets/blogList'

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
        </header>
        <Loader loaded={this.state.loaded} className="App-intro">
          <BlogList posts={this.state.posts} />
        </Loader>
      </div>
    );
  }
}

export default App;
