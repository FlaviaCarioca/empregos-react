import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
