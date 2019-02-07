import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Error404 from './Error404';
import Nosotros from './Nosotros';
import productos from '../datos/datos';
import Productos from './Productos';
import Header from './Header';
import SingleProducto from './SingleProducto';

class Router extends Component {

  state = {
    productos: []
  }

  componentWillMount(){
    this.setState({
      productos: productos
    })
  }

  render() {

    const {productos} = this.state;

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={() => 
              <Productos productos={productos} />
            } />
            <Route exact path="/producto/:productoId" render={(props) => {
              let idProducto = props.location.pathname.replace('/producto/', '');
              return (
                <SingleProducto producto={this.state.productos[idProducto]} />
              )
            }} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route component={Error404} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;