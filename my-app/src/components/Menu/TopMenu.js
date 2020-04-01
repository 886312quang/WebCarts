import React, { Component, useState } from 'react';
import logo from "./logo1-1.png";
import "./../fontawesome-pro-5.12.0-web/css/all.css"
import {
    Navbar,
    NavbarBrand,
    NavbarText,
    Container,
    Collapse,
    NavbarToggler,


} from 'reactstrap';
import { Route, Link } from "react-router-dom";
import "./TopMenu.css";

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Shop',
        to: '/shop',
        exact: true
    },
    {
        name: 'Cart',
        to: '/cart',
        exact: false
    },{
        name: 'Edit Items',
        to: '/shop/add',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}

class TopMenu extends Component {
    render() {
        return (
            <div className="boxNav">
                <Container >
                    <Navbar className="NavBar" light expand="md">
                        <NavbarBrand className="NavbarBrand"><img className="logo" src={logo} alt="logo" ></img>
                        </NavbarBrand>
                     
                        <ul className="mr-auto ml-auto" >
                            {this.showMenus(menus)}
                        </ul>
                        <NavbarText>
                            <div className="icon">
                             <Link to="/cart"> <i className="fad fa-cart-plus"></i></Link> 
                            </div>
                        </NavbarText>
                    
                    </Navbar>
                </Container>
            </div>
        );
    }
    showMenus = (menus) => {
        var result =null;
        if(menus.length > 0){
            result = menus.map((menu, index) =>{
                return(
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default TopMenu;