import React, { Component } from 'react'
import sanity from '../../lib/sanity';
import ReactQueryParams from 'react-query-params';


var Loader = require('react-loader');

class Post extends ReactQueryParams {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loaded: false,
    };
  }

  async componentWillMount() {   
    await sanity
      .fetch(
      '*[_id == $id]',
      { id: this.queryParams.id }
      )
      .then(res => {
        this.setState({ post: res[0], loaded: true })
        console.log(this.state.post)
      })
      .catch(err => {
        console.error('Oh no, error occured: ', err)
      })
  }
  render() {
    return (
      <div>
        <Loader loaded={this.state.loaded}>
          <h1>{this.state.post.title}</h1>
        </Loader>
      </div>
    )
  }
}

export default Post;