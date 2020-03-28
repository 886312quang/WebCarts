import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";


import Anh from './img/feature-1.jpg';
import Color from './img/color-speaker.jpg';
import PlayVido from './img/play-video.png';
import review from './img/review-1.jpg'
import review2 from './img/review-2.jpg'
import review3 from './img/review-3.jpg'
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header>
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
                                    <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/hero-speakers.png" alt="asdas" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <section className="sec1" id="about">
                    <Container>
                        <Row>
                            <div className="offset-sm-2 col-sm-8">
                                <div className="headerText text-center">
                                    <h1 className="header-about">SOUND YOU CAN
                                BELIEVE IN</h1>
                                    <p className="text-about">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquie em
                                ipsum dolor sit amet, consect etur adipisicing elit.</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col sm="auto">
                                <div className="placeBox wow bounceInUp">
                                    <div className="imgBx">
                                        <img src={Anh} alt="imgBox1" />
                                    </div>
                                    <div className="content-pic">
                                        <h5>Water Resistant</h5>
                                        <h5>Design</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="auto">
                                <div className="placeBox wow bounceInUp">
                                    <div className="imgBx">
                                        <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/feature-2.jpg" alt="imgBox1" />
                                    </div>
                                    <div className="content-pic">
                                        <h5>Quality
                                    <br />
                                    Audio
                                </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="auto">
                                <div className="placeBox wow bounceInUp">
                                    <div className="imgBx">
                                        <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/feature-3.jpg" alt="imgBox1" />
                                    </div>
                                    <div className="content-pic">
                                        <h5>Smart
                                    <br /> Listening </h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="auto">
                                <div className="placeBox wow bounceInUp">
                                    <div className="imgBx">
                                        <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/feature-4.jpg" alt="imgBox1" />
                                    </div>
                                    <div className="content-pic">
                                        <h5>Quality
                                          <br />Audio</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec2" id="sec2">
                    <Container>
                        <Row>
                            <Container>
                                <div className="contentBox h100">
                                    <Row>
                                        <Col sm="6">
                                            <h1 className="header-sec2">BIG SOUND FROM YOUR TUNES</h1>
                                            <p className="text-sec2">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco
                                            laboris nisi ut aliquip.
                                        </p>
                                            <Row>
                                                <Col sm="auto">
                                                    <div className="placeBox">
                                                        <div className="imgBx">
                                                            <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/icon-1.png" alt="imgIcon1" />
                                                        </div>
                                                        <div className="content-pic">
                                                            <h5>Bluetooth 4.2
                                                             <br />Compatible</h5>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="auto">
                                                    <div className="placeBox">
                                                        <div className="imgBx">
                                                            <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/icon-2.png" alt="imgBox1" />
                                                        </div>
                                                        <div className="content-pic">
                                                            <h5>Wireless
                                                             <br />Connections</h5>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="auto">
                                                    <div className="placeBox">
                                                        <div className="imgBx">
                                                            <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/icon-3.png" alt="imgBox1" />
                                                        </div>
                                                        <div className="content-pic">
                                                            <h5>Full Range
                                                            <br />Speakers</h5>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm="6">
                                            <div className="imgBox">
                                                <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/speaker-transparent.png" alt="LoGo-sec2" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </Row>
                    </Container>
                </section>
                <section className="sec3">
                    <Container className="sec3">
                        <Row>
                            <Col sm="6">
                                <div className="placeBox">
                                    <div className="product-pic">
                                        <img src={Color} alt="color-pic" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6">
                                <div className="content">
                                    <h3 className="header-sec3 text-center">
                                        3 DIFFERENT COLOR VARIATIONS
                                     </h3>
                                    <p className="text-sec3">
                                        Proin et convallis nulla. In lacus velit, venenatis at volutpat congue, sollicitudin ut lorem.
                                        Pellentesque blandit libero ac eleifend tempor. Interdum et malesuada fames ac ante ipsum primis in
                                        faucibus. Mauris lectus felis congue ut convallis.
                                   </p>
                                    <div className="colors">
                                        <span className="violet active " data-pic="url(/img/color-speaker.jpg)"></span>
                                        <span className="blue" data-pic="url(/img/blue-speaker.jpg)"></span>
                                        <span className="black" data-pic="url(/img/black-speaker.jpg)"></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec4" id="sec4">
                    <div className="img-bg">
                        <div className="img-play">
                            <a href="#popup"> <img src={PlayVido} alt="playvideo" /></a>
                        </div>
                        <h3>
                            TAKE THE BEAT
                             WITH YOU</h3>
                    </div>
                </section>
                <section className="sec5">
                    <Container className="text-center">
                        <h3>WHAT THEY SAY</h3>
                        <Row>
                            <Col sm="4">
                                <div className="placeReview">
                                    <div className="placeCard">
                                        <div className="vote">
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h3 className="header-sec4">Far exceeded expectations</h3>
                                        <div className="text-sec4">
                                            “There are many variations of lorem ipsum available, but the have suffered alteration in some form by
                                            humour.”
                                      </div>
                                    </div>
                                    <div className="place-img4">
                                        <div className="img-sec4">
                                            <img src={review} alt="review" />
                                        </div>
                                    </div>
                                    <div className="name4">
                                        Sarah Albert
                                 </div>
                                </div>
                            </Col>
                            <Col sm="4">
                                <div className="placeReview">
                                    <div className="placeCard">
                                        <div className="vote">
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h3 className="header-sec4">The best noise cancellation</h3>
                                        <div className="text-sec4">
                                            There are many variations of lorem ipsum available, but the have suffered alteration in some form by
                                            humour.”
                                       </div>
                                    </div>
                                    <div className="place-img4">
                                        <div className="img-sec4">
                                            <img src={review2} alt="review2" />
                                        </div>
                                    </div>
                                    <div className="name4">
                                        Kevin Martin
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4">
                                <div className="placeReview">
                                    <div className="placeCard">
                                        <div className="vote">
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star vote"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h3 className="header-sec4">Easy to use and light weight</h3>
                                        <div className="text-sec4">
                                            “There are many variations of lorem ipsum available, but the have suffered alteration in some form by
                                            humour.”
                                      </div>
                                    </div>
                                    <div className="place-img4">
                                        <div className="img-sec4">
                                            <img src={review3} alt="review3" />
                                        </div>
                                    </div>
                                    <div className="name4">
                                        Jessica Smith
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec6" id="sec6">
                    <Container className="text-center">
                        <h3 className="header-sec6">BIG BEATS ON THE GO</h3>
                        <p className="text-sec6">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris.</p>
                        <Row className="row6">
                            <div className="col-sm-2 bdr">
                                <div className="img-sec6">
                                    <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/beats-1.png" alt="21312" />
                                </div>
                                <div className="name-sec6">
                                    Portable Design
                                </div>
                            </div>
                            <div className="col-sm-2 bdr">
                                <div className="img-sec6">
                                    <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/beats-2.png" alt="12312" />
                                </div>
                                <div className="name-sec6">
                                    16 Hours Battery Life
                                  </div>
                            </div>
                            <div className="col-sm-2 bdr">
                                <div className="img-sec6">
                                    <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/beats-3.png" alt="123" />
                                </div>
                                <div className="name-sec6">
                                    Water Resistant
                                 </div>
                            </div>
                            <div className="col-sm-2 bdr">
                                <div className="img-sec6">
                                    <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/beats-4.png" alt="123" />
                                </div>
                                <div className="name-sec6">
                                    One Touch Listening
                                 </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="img-sec6">
                                    <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/beats-1.png" alt="1231" />
                                </div>
                                <div className="name-sec6">
                                    One Touch Listening
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                <section className="sec7">
                    <Container className="text-center">
                        <div className="img-sec7">
                            <img src="https://149381165.v2.pressablecdn.com/wp-content/uploads/2019/11/speaker-shop.png" className="img-sec-7" alt="sec7" />
                        </div>
                        <div className="content-sec7">
                            <h3 className="header-sec7">
                                SHOP SPEAKERS
                             </h3>
                            <p className="text-sec7">Get 10% off on orders over $200</p>
                            <button className="btn">PURCHASE TODAY</button>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}
export default Home;