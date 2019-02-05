import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';


class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount(){
     this.consultarNoticia();
  }

  consultarNoticia = (categoria = "general") => {
    const API_KEY = '4305bf24ee154ac09a491f24a5d249a8';
    const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=${API_KEY}`;

    fetch(url)
      .then((respuesta) =>{
        return respuesta.json()
      })
      .then((noticias) => {
        this.setState({
          noticias: noticias.articles
        })
      })
  }

  render() {    

    const { noticias } = this.state

    return (      
      <div className="contenedor-app">
        <Header />    
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticia = {this.consultarNoticia} />
          <Noticias noticias = {noticias} />
        </div>
      </div>
    );
  }
}

export default App;
