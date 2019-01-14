import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Test from './Test.jsx';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';


require( '../styles/application.scss' );


console.log( 'maybe?' );
ReactDOM.render( <Test />, document.getElementById( 'root' ) );
