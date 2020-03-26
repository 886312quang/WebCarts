import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import TopMenu from "../components/TopMenu";
import   "./img/hero-speakers.png"
class Home extends Component {
    render() {
        return (
            <header>
                <TopMenu />
                <Container>
                    <Row>
                        <Col sm="6">
                            <div className="content-box h100">
                                <h6>SMART BLUETOOTH SPEAKERS</h6>
                                <h1>Big Sound</h1>
                                <h1> Portable Size</h1>
                                <a className="btn-make">SHOP SPEAKER</a>
                            </div>
                        </Col>
                        <Col sm="6" className="pos">
                            <div className="pic wow bounceInRight">
                                <img src="./img/hero-speakers.png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}
export default Home;