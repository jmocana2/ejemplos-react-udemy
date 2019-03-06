import React, { Component } from 'react';

class Editar extends Component {

  tituloRef = React.createRef();
  entradaRef = React.createRef();

  editarPost = (e) => {
    e.preventDefault();

    const titulo = this.tituloRef.current.value;
    const entrada = this.entradaRef.current.value;

    const post = {
      title: titulo,
      body: entrada,
      userId: 1,
      id: this.props.post.id
    }

    this.props.editarPost(post)
    
  }

  getForm = () => {

    if (this.props.post === undefined){
      return null;
    }
    
    const {title, body} = this.props.post;

    return (
    <form onSubmit={this.editarPost} className="col-8">
      <legend className="text-center">Editar post</legend>
      <div className="form-group">
        <label>Titulo del post:</label>
        <input type="text" className="form-control" ref={this.tituloRef} defaultValue={title}/>
      </div>
      <div className="form-group">
        <label>Contenido:</label>
        <textarea className="form-control" defaultValue={body} ref={this.entradaRef}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Gurdar cambios</button>
    </form>
    )
  }


  render() {
    return (
      <React.Fragment>
        {this.getForm()}
      </React.Fragment>
    );
  }
}

export default Editar;