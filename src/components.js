import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (<nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Shopping Cart</a>
    </nav>);
  }
}
class Footer extends Component {
  render() {
    return (<nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; 2018</a>
    </nav>);
  }
}
class CartItems extends Component {
  render() {
    return (<div className="container">
      <h1>Cart Items</h1>
    </div>)
  }
}

export {
  Header,
  CartItems,
  Footer
}
