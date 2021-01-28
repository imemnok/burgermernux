import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import "../css/banner.css";
import burger from "../static/Floating-burger-PNG.png";
import bacon from "../static/Blue-Cheese-Burger.jpg";
import chicken from "../static/grilledchickenburger.png"
import SplitText from "./splittext.component";
import Home from "./home.component";

export default function Banner(props) {
  return (
    <>
      <div className="home-main">
        <Carousel indicators={false}>
          <Carousel.Item interval={10000}>
          <Carousel.Caption className="first-slide">
              <Container>
                <Row className="h-0">
                  <Col className="col-8">
                    <Row className="h-25">
                      <Col>
                        <h3 className="featured">
                          <span className="right">
                            <SplitText copy="Featured Item"></SplitText>
                          </span>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="h-25">
                      <Col>
                        <h3 className="bumper">
                          <SplitText
                            copy="The Best Burger In Town!"
                            role="heading"
                          ></SplitText>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="h-50">
                      <Col>
                        <div className="item-div">
                          <h3 className="item-name">
                            The Classic:{" "}
                            <span className="item-price">$7.99</span>
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Image loading="lazy" src={burger} />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={25}
            className="transition-slide"
          ></Carousel.Item>
          <Carousel.Item interval={10000}>
          <Carousel.Caption className="second-slide">
              <Container>
                <Row className="h-0">
                  <Col className="col-8">
                    <Row className="h-25">
                      <Col>
                        <h3 className="featured">
                          <span className="right">
                            <SplitText copy="Featured Item"></SplitText>
                          </span>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="h-25">
                      <Col>
                        <h3 className="bumper">
                          <SplitText
                            copy="Make a Cow Happy!"
                            role="heading"
                          ></SplitText>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="h-50">
                      <Col>
                        <div className="item-div">
                          <h3 className="item-name">
                            Chicken Sandwich:{" "}
                            <span className="item-price">$8.99</span>
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Image loading="lazy" src={chicken} fluid={true} />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={25}
            className="transition-slide"
          ></Carousel.Item>
          <Carousel.Item interval={10000}>
            <Carousel.Caption className="third-slide">
              <Container>
                <Row className="h-0">
                  <Col className="col-8">
                    <Row className="h-25">
                      <Col>
                        <h3 className="featured">
                          <span className="right">
                            <SplitText copy="Weekly Special"></SplitText>
                          </span>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="h-25">
                      <Col>
                        <h3 className="bumper">
                          <SplitText
                            copy="Who doesn't love Blue Bacon!"
                            role="heading"
                          ></SplitText>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="h-50">
                      <Col>
                        <div className="item-div">
                          <h3 className="item-name">
                            Bacon Blue Burger:{" "}
                            <span className="item-price">$11.00</span>
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Image loading="lazy" src={bacon} fluid={true} />
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={25}
            className="transition-slide"
          ></Carousel.Item>
        </Carousel>
      </div>
      <div className="more-body">
        {/* <Home /> */}
      </div>
    </>
  );
}
