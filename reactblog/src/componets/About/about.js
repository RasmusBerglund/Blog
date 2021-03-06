import React, { Component } from 'react'
import sanity from '../../lib/sanity';

var Loader = require('react-loader');

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {},
      loaded: false,
    };
  }

  async componentWillMount() {
    await sanity
      .fetch(
      '*[_id == $id]',
      { id: '6f5a7c17-431f-4426-b0da-14b04acc51f2' }
      )
      .then(res => {
        this.setState({ author: res[0], loaded: true })
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }
  render() {
    return (
      <div>
        <Loader loaded={this.state.loaded}>
          <h1>{this.state.author.name}</h1>
          <p>Hello {this.state.author.name}!</p>
        </Loader>
      </div>
    )
  }
}

export default About;