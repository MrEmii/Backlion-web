import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './global/Header';
import Footer from './global/Footer';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {

    const {children} = this.props;

    return (
      <div className="App">
        <Header/>
        <div className="body">
          {children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
