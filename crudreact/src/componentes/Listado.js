import React, { Component } from 'react';
import Post from './Post';

class Listado extends Component {
  render() {

    const {posts} = this.props

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Título</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <Post key={post.id} info={post} borrarPost={this.props.borrarPost} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Listado;