import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import sanity from '../../lib/sanity';
import { BlogList } from './blogList'

var Loader = require('react-loader');

class Home extends Component {
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
          })
          .catch(err => {
            console.error('Oh no, error occured: ', err)
          })
      }
    
      render() {
        return (
            <div className="container">
              <Loader loaded={this.state.loaded} className="App-intro">
                <BlogList posts={this.state.posts} />
              </Loader>
            </div>
        );
      }
    }

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)