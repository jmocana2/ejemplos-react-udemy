import React from 'react';

const Noticia = (props) => {

  const {urlToImage, url, title, description, source} = props.noticia;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          {urlToImage &&
            <img src={urlToImage} alt={title}/>
          }
          <span className="card-title">{source.name}</span>
        </div>
        <div className="card-content">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="card-action">
          <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effects waves-light btn">Noticia completa</a>
        </div>
      </div>
    </div>
      
  
  );
};

export default Noticia;