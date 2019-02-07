import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Error404 from './Error404';
import Nosotros from './Nosotros';
import productos from '../datos/datos';
import Productos from './Productos';
import Header from './Header';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegación';
import Contacto from './Contacto';

class Router extends Component {

  state = {
    productos: [],
    terminoBusqueda: ''
  }

  componentWillMount(){
    this.setState({
      productos: productos
    })
  }

  buscarProducto = (busqueda) => {
    if(busqueda.length > 3){
      this.setState({
        terminoBusqueda: busqueda
      })
    }
    else
    {
      this.setState({
        terminoBusqueda: ''
      })
    }
  }

  render() {

    let { productos } = this.state; 
    const { terminoBusqueda} = this.state;

    productos = productos.filter(producto => producto.nombre.toLowerCase().indexOf(terminoBusqueda.toLowerCase()) !== -1)

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Navegacion />
          <Switch>
            <Route exact path="/" render={() => 
              <Productos productos={productos}
                buscarProducto={this.buscarProducto}
              />
            } />
            <Route exact path="/productos" render={() => 
              <Productos 
              productos={productos}
              buscarProducto={this.buscarProducto}
               />
            } />
            <Route exact path="/producto/:productoId" render={(props) => {
              let idProducto = props.location.pathname.replace('/producto/', '');
              return (
                <SingleProducto producto={this.state.productos[idProducto]} />
              )
            }} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route component={Error404} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;