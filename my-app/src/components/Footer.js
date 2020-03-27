import React from 'react';
import "./fontawesome-pro-5.12.0-web/css/all.css"
import "../components/Footer.css"
import { Row, Button, Col, Input, Container } from 'reactstrap';

const Footer = (props) => {
    return (
        <div>
        <footer>
            <Container>
                <Row>
                    <Col sm="auto">
                        <div className="subscribe-box">
                            <h2>Signup for Email Alert</h2>
                            <div className="place-footer">
                                <p className="subscribe-text">Subscribe for latest articles and resources</p>
                                <Input type="email" name="" id="" placeholder="Your email address" className="subscribe-input" />
                                <Button type="button" className="btn">Sign up</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm="auto">
                        <div className="explore tex">
                            <h2>Explore</h2>
                            <ul>
                            <li>About WillBuy</li>
                            <li>My Account</li>
                            <li>Contact</li>
                            <li>Help & FAQs</li>
                            <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="auto">
                        <div className="company ">
                            <h2>Company</h2>
                            <ul>
                            <li>Shop Products</li>
                            <li>My Cart</li>
                            <li>Checkout</li>
                            <li>Order Tracking</li>
                            <li>Contact</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="auto">
                        <div className="contact">
                            <h2>Contact</h2>
                            <ul className="text-contact">
                            <li><i className="fad fa-phone-square-alt"></i> 0924370531</li>
                            <li><i className="fal fa-paper-plane"></i> 886312quangpham@gmail.com</li>
                            <li><i className="fad fa-map-marked"></i> 22 Broklyn Street 30 Road
                                New York, USA</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className="end-footer">
            <Row>
                <p className="text-end">All rights reserved. Emso WordPress Theme</p>
            </Row>
            <div className="icon-footer">
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook-square"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="backhome">
            <a><i className="fad fa-angle-up"></i></a>
        </div>
    </div>          
    )
}
export default Footer;



