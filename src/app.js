// //const css = require('./app.scss');
// import css from './sass/app.scss';
import sass from "./sass/app.sass"
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./components/Menu";

ReactDOM.render(
 <div>
    <Menu/>  
 </div>,
  document.getElementById('root')
);