import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Inicio from './Inicio';
import Error404 from './Error404';
import Nosotros from './Nosotros';
import productos from '../datos/datos';

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
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;