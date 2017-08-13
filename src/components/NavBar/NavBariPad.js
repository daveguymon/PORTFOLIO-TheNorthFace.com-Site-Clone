import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import DesktopDropdownMenu from './../DropdownMenu/DesktopDropdownMenu';
import { connect } from 'react-redux';

class NavBariPad extends Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownActive: true
    }

    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu() {
    this.setState({
      dropdownActive: !this.state.dropdownActive
    })
  }

  enterMenu() {
    this.setState({
      dropdownActive: false
    })
  }

  exitMenu() {
    this.setState({
      dropdownActive: true
    })
  }



  render() {
    return (
      <div className="navBariPad">
        <div className="navBarContainer">
          <div className="topNav">
            <ul className="userLinks">
              <li>Find a Store</li>
              <li>Sign In</li>
              <li className="cartButton">Cart ({this.props.cart.length})</li>
            </ul>
            <ul className="navLinks">
                <li onMouseEnter={ this.toggleMenu } onMouseLeave={ this.toggleMenu }>{"MEN'S"}</li>
                <li><Link to="/womens">{"WOMEN'S"}</Link></li>
                <li><Link to="/backpacks">BACKPACKS</Link></li>
                <li><Link to="/explore">EXPLORE</Link></li>
            </ul>

          </div>
          <div>
            <DesktopDropdownMenu dropdownActive={ this.state.dropdownActive } onMouseEnter={ this.enterMenu } onMouseLeave={ this.exitMenu }/>
          </div>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBariPad)
