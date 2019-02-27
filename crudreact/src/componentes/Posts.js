import React, { Component } from 'react';
import Listado from './Listado';

class Posts extends Component {
  render() {

    const {posts} = this.props

    return (
      <div className="col-12 col-md-8">
        <h2 className="text-cener">Posts</h2>
        <Listado posts={posts} />
      </div>
    );
  }
}

export default Posts;