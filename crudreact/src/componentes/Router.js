import {BrowserRouter, Switch, Route} from 'react-router-dom'

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';

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
                <Route exact path='/post/:postId' render={(props) => {
                  
                  let idPost = props.location.pathname.replace('/post/', '');
                  console.log(idPost)                 

                  const filtro = posts.filter(post => (
                    post.id == idPost                   
                  ));
                  
                  return(<SinglePost post={filtro[0]} />)
                  
                }} />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default Router;