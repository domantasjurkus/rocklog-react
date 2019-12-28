import React from 'react';

import '../../lib/css/materialize.min.css'
// import 'materialize-css/bin/materialize.css'
// import 'materialize-css/bin/materialize.js'

import './App.css';

import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App grey darken-4">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
