import React, { useState } from 'react';
import logo from "./img/logo1-1.png";
import "./fontawesome-pro-5.12.0-web/css/all.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap';
import { Link } from "react-router-dom";
import "../components/TopMenu.css"

const TopMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="boxNav">
            <Container >
                <Navbar className="NavBar" light expand="md">
                    <NavbarBrand className="NavbarBrand" href="/"><img className="logo"  src={logo} ></img>  
                    </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto ml-auto" navbar>

                                 <NavItem >
                                    <NavLink>
                                        <Link to="/">Home</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink>
                                        <Link to="/about">About</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink>
                                        <Link to="/contact">Contact</Link>
                                    </NavLink>
                                </NavItem>
                            

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
             
                                            <Link to="/shop">Shop</Link>
                                        
              </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        <Link to="/cart">Cart</Link>
                </DropdownItem>
                                        <DropdownItem>
                                            CheckOut
                </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Go Shop
                </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>
                                <div className="icon">
                                <i className="fad fa-cart-plus"></i>
                                
                                </div>
                            </NavbarText>
                        </Collapse>
                </Navbar>
            </Container>
        </div>

    );
}

export default TopMenu;