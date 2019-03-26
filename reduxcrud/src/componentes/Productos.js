import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { mostrarProductos } from '../actions/actionsProductos';
import Producto from './Producto';

class Productos extends Component {

  componentDidMount(){
    this.props.mostrarProductos();
  }

  render() {

    const { productos } = this.props

    return (
      <React.Fragment>
        <h2 className="text-center my-5">Listado de productos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {
                productos.map(producto => (
                  <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} id={producto.id} />
                ))
              }
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  productos: state.productos.productos
})

export default connect(mapStateToProps, { mostrarProductos })(Productos);