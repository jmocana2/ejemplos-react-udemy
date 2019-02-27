import {BrowserRouter, Switch, Route} from 'react-router-dom'

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';

class Router extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    this.obtenerPosts()
  }

  obtenerPosts = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
       this.setState({
        posts: response.data
      })
    })
  } 

  render() {

    const { posts } = this.state;

    return (
      <BrowserRouter>
          <div className="container">
            <div className="row justify-content-center">
              <Header />
              <Navegacion />
              <Switch>
                <Route exact path='/' render={() => {
                  return(
                    <Posts posts={posts} />
                  )
                  }} 
                />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default Router;