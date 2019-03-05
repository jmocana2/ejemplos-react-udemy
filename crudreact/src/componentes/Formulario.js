import React, { Component } from 'react';

class Formularo extends Component {

  tituloRef = React.createRef();
  entradaRef = React.createRef();

  crearPost = (e) => {
    e.preventDefault();

    const titulo = this.tituloRef.current.value;
    const entrada = this.entradaRef.current.value;

    const post = {
      title: titulo,
      body: entrada,
      userId: 1
    }

    this.props.crearPost(post)
    
  }


  render() {
    return (
      <form onSubmit={this.crearPost} className="col-8">
        <legend className="text-center">crear nuevo post</legend>
        <div className="form-group">
          <label>Titulo del post:</label>
          <input type="text" className="form-control" ref={this.tituloRef} />
        </div>
        <div className="form-group">
          <label>Contenido:</label>
          <textarea className="form-control" placeholder="contenido..." ref={this.entradaRef}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    );
  }
}

export default Formularo;