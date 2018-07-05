import React, { Component } from 'react';
import {Header,CartItems, Footer} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CartItems/>
        <Footer/>
      </div>
    );
  }
}
export default App;
