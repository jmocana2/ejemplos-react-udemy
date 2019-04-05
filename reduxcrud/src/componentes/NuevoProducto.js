import React, { Component } from 'react';
import { connect } from 'react-redux'

import { agregarProducto } from '../actions/actionsProductos';

class NuevoProducto extends Component {

  state = {
    titulo: '',
    precio: 0,
    error: false
  }

  nuevoTitulo = (e) =>{
    this.setState({
      titulo: e.target.value
    })
  }

  nuevoPrecio = (e) =>{
    this.setState({
      precio: e.target.value
    })
  }

  agregarProducto = (e) => {
    e.preventDefault();
    const {titulo, precio} = this.state;

    if(titulo === '' || precio === ''){
      this.setState({
        error: true
      })
      return
    }
    this.setState({
      error: false
    })

    const producto = {
      nombre: titulo,
      precio
    }

    this.props.agregarProducto(producto); 
    this.props.history.push('/');

  }

  render() {

    const { error } = this.state 

    return (
      <div className="row justify-content-center mt-5">
      <div className="col-md-8">
          <div className="card">
              <div className="card-body">
                  <h2 className="text-center">Agregar Nuevo Producto</h2>
                  <form onSubmit={this.agregarProducto}>
                      <div className="form-group">
                          <label>Titulo</label>
                          <input onChange={this.nuevoTitulo} type="text" className="form-control" placeholder="Titulo" />
                      </div>
                      <div className="form-group">
                          <label>Precio del Producto</label>
                          <input onChange={this.nuevoPrecio} type="text" className="form-control" placeholder="Precio" />
                      </div>
                      <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                  </form>
                  {error && 
                  <div className="font-weight-bold alert alert-danger text-ClientRect mt-4">
                    <p className="mb-0">Todos los campos son obligatorios</p>
                  </div>}
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default connect(null, { agregarProducto })(NuevoProducto);