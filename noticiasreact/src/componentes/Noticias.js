import React, { Component } from 'react';
import Noticia from './Noticia';

class Noticias extends Component {
    render() {

        const {noticias} = this.props

        return (
            <div className="row">
             
                {noticias.map((noticia) => 
                   <Noticia key={noticia.url} noticia={noticia} />
                )}                
            </div>
        );
    }
}

export default Noticias;