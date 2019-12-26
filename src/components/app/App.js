import React from 'react';

import '../../lib/css/materialize.min.css'
import './App.css';

import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

function App() {
  return (
    <body className="App grey darken-4">
      <Header />
      <Body />
      <Footer />
    </body>
  );
}

export default App;
