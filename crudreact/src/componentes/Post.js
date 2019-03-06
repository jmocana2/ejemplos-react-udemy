import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Post extends Component {
  render() {

    const { id, title } = this.props.info;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td><Link to={`/post/${id}`} className="btn btn-primary" style={{marginBottom: '5px'}}>Ver</Link></td>
        <td><Link to={`/editar/${id}`} className="btn btn-warning" style={{marginBottom: '5px'}}>Editar</Link>
        <button type="button" className="btn btn-danger" onClick={() => this.props.borrarPost(id)}>Borrar</button></td>
      </tr>
    );
  }
}

export default Post;