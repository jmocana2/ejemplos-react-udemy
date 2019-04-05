import React, { Component } from 'react';
import { connect } from 'react-redux'

import { mostrarProducto, editarProducto } from '../actions/actionsProductos';

class EditarProducto extends Component {

  state = {
    titulo: '',
    precio: '',
    error: false
  }

  componentDidMount(){
    this.props.mostrarProducto(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps, nextState){
     const { nombre, precio } = nextProps.producto
     this.setState({
       titulo: nombre,
       precio
     })
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

  editarProducto = (e) => {
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

    const { id } = this.props.match.params;

    const producto = {
      nombre: titulo,
      precio: String(precio),
      id
    }

    this.props.editarProducto(producto); 
    this.props.history.push('/');


  }

  render() {

    const { titulo, precio, error } = this.state 

    return (
      <div className="row justify-content-center mt-5">
      <div className="col-md-8">
          <div className="card">
              <div className="card-body">
                  <h2 className="text-center">Agregar Nuevo Producto</h2>
                  <form onSubmit={this.editarProducto}>
                      <div className="form-group">
                          <label>Titulo</label>
                          <input defaultValue={titulo} onChange={this.nuevoTitulo} type="text" className="form-control" placeholder="Titulo" />
                      </div>
                      <div className="form-group">
                          <label>Precio del Producto</label>
                          <input defaultValue={precio} onChange={this.nuevoPrecio} type="text" className="form-control" placeholder="Precio" />
                      </div>
                      <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar cambios</button>
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

const mapStateToProps = state => ({
  producto: state.productos.producto
})

export default connect(mapStateToProps, { mostrarProducto, editarProducto })(EditarProducto);