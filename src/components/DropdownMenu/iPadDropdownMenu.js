import React, { Component } from 'react';
import './iPadDropdownMenu.css';
import { Link } from 'react-router-dom';


export default class IPadDropdownMenu extends Component {

  render(){

    let iPadDropdownDisplay = { display: 'none' }

    return (
      <div className="mainIpadDropdownMenu" style={ this.props.dropdownActive ? iPadDropdownDisplay : null}>
        <div className="iPadDropdownLinksContainer">

          <section className="categoryLinks">
            <h2 className="mensLinkCategory" onClick={this.props.toggleMenu}><Link to="/shop/mens">SHOP ALL {"MEN'S"}</Link></h2>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/mens/outerwear">OUTERWEAR</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/mens/shirts">SHIRTS</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/mens/bottoms">BOTTOMS</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/mens/hats">HATS</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/backpacks">BACKPACKS</Link></p>
          </section>

          <section className="categoryLinks">
            <h2 className="womensLinkCategory" onClick={this.props.toggleMenu}><Link to="/shop/womens">SHOP ALL {"WOMEN'S"}</Link></h2>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/womens/outerwear">OUTERWEAR</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/womens/shirts">SHIRTS</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/womens/bottoms">BOTTOMS</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/shop/womens/hats">HATS</Link></p>
            <p className="dropDownLinks" onClick={this.props.toggleMenu}><Link to="/backpacks">BACKPACKS</Link></p>
          </section>

          <section className="categoryLinks">
            <h2 className="backpacksLinkCategory" onClick={ this.props.toggleMenu }><Link to="/backpacks">SHOP ALL BACKPACKS</Link></h2>
            <p className="dropdownLinks" onClick={this.props.toggleMenu}><Link to="/shop/mens/backpacks">{"MEN'S"}</Link></p>
            <p className="dropdownLinks" onClick={this.props.toggleMenu}><Link to="/shop/womens/backpacks">{"WOMEN'S"}</Link></p>
          </section>
        </div>
        <div className="freeReturns">
        <p>FREE 3-DAY SHIPPING & FREE RETURNS</p>
        </div>
      </div>
    )
  }
}
