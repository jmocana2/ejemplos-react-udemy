(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=(a(14),a(1)),l=a(2),s=a(4),m=a(3),u=a(5),p=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper light-blue darken-3"},c.a.createElement("a",{href:"https://newsapi.org/",className:"brand-logo"},"Noticias")))},v=function(e){var t=e.noticia,a=t.urlToImage,n=t.url,r=t.title,o=t.description,i=t.source;return c.a.createElement("div",{className:"col s12 m6 l4"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},a&&c.a.createElement("img",{src:a,alt:r}),c.a.createElement("span",{className:"card-title"},i.name)),c.a.createElement("div",{className:"card-content"},c.a.createElement("h3",{className:"title"},r),c.a.createElement("p",{className:"description"},o)),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"waves-effects waves-light btn"},"Noticia completa"))))},d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.noticias;return c.a.createElement("div",{className:"row"},e.map(function(e){return c.a.createElement(v,{key:e.url,noticia:e})}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).categoriaRef=c.a.createRef(),a.consultarCategoria=function(e){e.preventDefault(),(0,a.props.consultarNoticia)(a.categoriaRef.current.value)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"buscador row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("form",{onSubmit:this.consultarCategoria},c.a.createElement("h2",null,"Noticias por categor\xeda"),c.a.createElement("div",{className:"input-field col s12 m8"},c.a.createElement("select",{ref:this.categoriaRef},c.a.createElement("option",{value:"general",defaultValue:!0},"General"),c.a.createElement("option",{value:"business"},"Business"),c.a.createElement("option",{value:"entertainment"},"Entertainment"),c.a.createElement("option",{value:"health"},"Health"),c.a.createElement("option",{value:"science"},"Science"),c.a.createElement("option",{value:"sports"},"Sports"),c.a.createElement("option",{value:"technology"},"Technology"))),c.a.createElement("div",{className:"input-field col s12 m4 enviar"},c.a.createElement("input",{type:"submit",className:"btn amber darken-2",value:"Buscar"})))))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={noticias:[]},a.consultarNoticia=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"general",t="https://newsapi.org/v2/top-headlines?country=gb&category=".concat(e,"&apiKey=").concat("4305bf24ee154ac09a491f24a5d249a8");fetch(t).then(function(e){return e.json()}).then(function(e){a.setState({noticias:e.articles})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.consultarNoticia()}},{key:"render",value:function(){var e=this.state.noticias;return c.a.createElement("div",{className:"contenedor-app"},c.a.createElement(p,null),c.a.createElement("div",{className:"container white contenedor-noticias"},c.a.createElement(f,{consultarNoticia:this.consultarNoticia}),c.a.createElement(d,{noticias:e})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.f817b4e2.chunk.js.map