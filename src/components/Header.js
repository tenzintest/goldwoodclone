import React, { Component, useState } from 'react'
import logo from '../svg/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Fade as Hamburger } from 'hamburger-react'
import { FaSearch } from "react-icons/fa";
import { BiUser, BiShoppingBag, BiLock, BiNoEntry } from "react-icons/bi";
import { useSpring, animated } from "react-spring";
import Carousel from 'react-bootstrap/Carousel';
import img0 from '../images/goldwood1.jpg';
import img1 from '../images/goldwood2.jpg';
import img2 from '../images/goldwood3.jpg';
import img3 from '../images/goldwood4.jpg';
import img4 from '../images/goldwood5.jpg';
import img5 from '../images/goldwood6.jpg';
import img6 from '../images/goldwood7.jpg';
import img7 from '../images/goldwood8.jpg';
import img8 from '../images/goldwood9.jpg';
import { text } from '@fortawesome/fontawesome-svg-core'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Radium, { StyleRoot } from 'radium';

function Header() {
    const [isOpen, setOpen] = useState(false);
    const [key, setKey] = useState(1);


    const scrolling = useSpring({
      from: { transform: "translate(60%,0)" },
      to: { transform: "translate(-60%,0)" },
      config: { duration: 9900 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    });

    const animatestyle = {
      color: "#e61c24", 
      fontWeight: 300,
      textTransform: 'uppercase',
      fontSize: 55,
      marginTop: 15,
      marginBottom: 15,
   
    // Adding media query..
    '@media (max-width: 600px)': {
      color: "#e61c24", 
      fontSize: 30,
      fontWeight: 300,
      marginTop: 5,
      marginBottom: 5,
    },
  };


    return (
      <HeaderContainer className="header-container">
       <div className="columns">
          <div className="column1">
            <h3 style={{
              fontSize: 25,
              color: "#e61c24",
              marginBottom: 30,
              fontWeight: 200}}>GOLDWOOD</h3>
          </div>
          <div className="column2">
              <Hamburger 
                size={22}
                color="#e61c24"
                toggled={isOpen} toggle={setOpen} 
                />
          </div>
          <div className="column3">
          <h3  className="colum3title"
            style={{fontSize: 25,color: "#e61c24",
          fontWeight: 200, textTransform: 'uppercase'}}>Shop</h3>

          </div>
          <div className="column4">
            <div className='filterStyle'
            style={{position: 'relative',
            right: 30, top: 5}}>
              <span style={{color: "black",
            fontSize: 9,
            position: 'relative',
            left: 9,
            bottom: 5,
            letterSpacing: 1,
            color: "#e61c24",
            textTransform: 'uppercase'}}>filter</span>
            </div>

            <FaSearch size={15}
             className="fasearchicon" 
             style={{
              position: "relative",
              color: "black",
              bottom: 12,
              left: 45,
              color: "#e61c24",
              fontWeight: 100}} />

            <BiUser size={18}
              style={{
                position: "relative",
                color: "black",
                bottom: 12,
                left: 58,
                color: "#e61c24",
                fontWeight: 100}} />

            <BiShoppingBag
              size={18}
              style={{
                position: "relative",
                color: "black",
                bottom: 12,
                left: 72,
                color: "#e61c24",
                fontWeight: 100}} />

          </div>
        </div>


        <div className='twoLine'>
          <div className='lines2'>
            <div className='lines3'></div>
          </div>
          <div className='lines2'>
            <div className='lines3'></div>
          </div>
        </div>

          <div key={key}>
              <animated.div style={scrolling}>
                  <h2
                  style={animatestyle}
                      >
                  SELECTOR OF FURNITURE AND FINE GOODS
                  </h2>
                </animated.div>;
          </div>


        <div className='twoLine'>
          <div className='lines2'>
            <div className='lines4'></div>
          </div>
        </div>

        <Container>
          <h2 style={{
            marginTop: 60,
            letterSpacing: 1,
            fontSize: 70,
            fontWeight: 500,
            textAlign: 'center',
            color: "#e61c24"
          }}>
            GOLDWOOD BY BORIS
          
          </h2>
        </Container>

        <div className='twoLine2'>
          <div className='lines2'>
          <div className='lines6'></div>
          </div>
          <div className='lines2'>
            <div className='lines6'></div>
          </div>
        </div>


        <div className='twoPic'>
          <div className='twl'>
              <div className='imgSwip'>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={img0}
                    alt="First slide"
                    style={{height: "700px", width: "200px"}}
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={img1}
                    alt="Second slide"
                    style={{height: "700px", width: "200px"}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    style={{height: "700px", width: "200px"}}
                  />
                </Carousel.Item>
              </Carousel>
              </div>
              
              <div
                  style={{
                      textTransform: "uppercase", 
                      color: "#e61c24",
                      fontSize: 16,
                      fontWeight: 500,
                      display: "inline"
                  }}
                >
                  SELECTED 
                </div>
                <div style={{ 
                  display: "inline",
                  fontSize: 30, 
                  textTransform: 'uppercase',
                  color: "#e61c24",
                  marginLeft: 10}}>  BY BORIS</div>
                <div className='columns'>
                  <div className='cp'>
                    <p style={{textAlign: "start",
                  fontSize: 18, fontWeight: 200, color: "#333"}}>Under the vision of Boris, the house reformulated its approach on Mid Century Design. A market that felt saturated with the uninspiring dull that was created for the many soon became the pinnacle for the few, the eclectic and the mad. Representing the thrive of craftsmanship and design with a most personal selection of
                      fascinating and intriguing pieces.</p>
                    <a href=""  
                    style={{ color: "#e61c24", textDecoration: "underline",
                    textDecorationThickness: 3, lineHeight: 4, textUnderlineOffset: 5}}>Shop full collection</a>
                  </div>
                </div>
              </div>



          <div className='twl'>
            <div className='imgSwip'>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={img3}
                    alt="First slide"
                    style={{height: "700px", width: "200px"}}
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={img4}
                    alt="Second slide"
                    style={{height: "700px", width: "200px"}}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                    style={{height: "700px", width: "200px"}}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div
                  style={{
                      textTransform: "uppercase", 
                      color: "#e61c24",
                      fontSize: 16,
                      fontWeight: 500,
                      display: "inline"
                  }}
                >SELECTED 
                </div>
                <div style={{ 
                  display: "inline",
                  fontSize: 30, 
                  textTransform: 'uppercase',
                  color: "#e61c24",
                  marginLeft: 10}}> 
                  BY BORIS</div>
                <div className='columns'>
                  <div className='cp'>
                    <p style={{textAlign: "start",
                  fontSize: 18, fontWeight: 200, color: "#333"}}>Mario Bellini, one of the leading designers in post-war Italian style, quickly become our most featured designer. His furniture is exciting, both in its use of materials and in the originality of his designs. Goldwood started in 2008 and since then we have become experts in selling the precious Camaleonda sofa. Our in-house upholstery team can reupholster the camaleonda in the fabric you desire. With a focus on sustainable fabrics, we offer a great variety of options.</p>
                    <a href=""  
                    style={{ color: "#e61c24", textDecoration: "underline",
                    textDecorationThickness: 3, textUnderlineOffset: 5}}>Shop full collection</a>
                  </div>
                </div>
              </div>
              </div>
              
              <div 
                className='lines7'
                style={{ 
                    position: 'relative', 
                    top: 120,  
                    marginLeft: 10, 
                    marginRight: 10
                    }}
                >
              </div>
              <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 style={{
                      marginTop: '200px',
                      letterSpacing: 1,
                      fontSize: 60,
                      fontWeight: 500,
                      textAlign: 'center',
                      color: "#e61c24"
                      }}>
                      FEATURED ITEMS
                  </h1>
                  </Col>
              </Row>
            </Container>
          
            <Row>
              <Col xs={4} md={4}>
                <div className='lines6'></div>
              </Col>
              <Col xs={6} md={4}>
                <div className='lines6'></div>
              </Col>
              <Col xs={6} md={4}>
                <div className='lines6'></div>
              </Col>
              <Col xs={4} md={4}>
                <Card style={{ 
                    width: '38rem', 
                    height: '25rem', 
                    position: 'relative', 
                    left: 30, marginTop: 20,
                    background: `url(${img6})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', }}>
                </Card>
              </Col>
              <Col xs={6} md={4}>
                <Card style={{ width: '36rem', 
                    height: '25rem', position: 'relative', 
                    left: 30, marginTop: 20,
                    background: `url(${img7})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',}}>
                   
                  </Card>
              </Col>
              <Col xs={6} md={4}>
                <Card style={{   width: '38rem', 
                    height: '25rem', position: 'relative', 
                    right: 10, marginTop: 20, 
                    background: `url(${img8})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                     }}>
                    
                  </Card>
              </Col>
            </Row>

            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <a href=""  
                    style={{ 
                        color: "#e61c24", 
                        textDecoration: "underline",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        textDecorationThickness: 3, 
                        lineHeight: 20, 
                        textUnderlineOffset: 5}}>Shop full collection</a>
                  </Col>
              </Row>
            </Container>


            <div 
                className='lines7'
                style={{
                    position: 'relative',
                    bottom: '5%',
                    marginLeft: 50, 
                    marginRight: 100,
                    }}
                >
              </div>

          <div style={{
            position: 'relative',
            bottom: '4%',
            marginRight: 30,
            marginLeft: 50,
          }}>
            <Row>
              <Col>
                <div
                    style={{
                        textTransform: "uppercase", 
                        color: "#e61c24",
                        fontSize: 16,
                        fontWeight: 700,
                        display: "inline"
                    }}
                  > My general
                  </div>
              </Col>
              <Col xs={5}>
              <div
                    style={{
                        textTransform: "uppercase", 
                        color: "#e61c24",
                        fontSize: 16,
                        fontWeight: 700,
                        display: "inline"
                    }}
                  >
                    SUBSCRIBE FOR OUR NEWSLETTER
                  </div>
              </Col>
              <Col>
              <div
                    style={{
                        textTransform: "uppercase", 
                        color: "#e61c24",
                        fontSize: 16,
                        fontWeight: 700,
                        display: "inline"
                    }}
                  >
                    GET IN TOUCH
                  </div>
              </Col>
              <Col xs={1}>
              <div
                    style={{
                        textTransform: "uppercase", 
                        color: "#e61c24",
                        fontSize: 16,
                        fontWeight: 700,
                        display: "inline"
                    }}
                  >
                    FOLLOW US
                  </div>
              </Col>

            </Row>
            </div>   

            <div style={{
                marginLeft: 15,
                position: 'relative',
                bottom: '4%',
            }}>
            <Row>
            <Col xs={3}>
                    <ul style={{
                      marginTop: 15,
                      listStyleType: "none"
                    }}>
                      <li style={{color: "black"}}>
                          <a href="">Payment</a>
                      </li>
                      <li style={{color: "black"}}>
                        <a href="">
                          Shipping
                        </a>
                      </li>
                      <li style={{color: "black"}}>
                        <a href="">
                          Privacy & Policy
                        </a>
                        </li>
                    </ul>
              </Col>
              
              <Col xs={5}>
                <Button style={{
                  color: "#e61c24",
                  background: "none",
                  borderRadius: 30,
                  borderColor: "#e61c24",
                  paddingLeft: 25,
                  paddingRight: 25,
                  position: 'relative',
                  left: '65%'
                }}>SUBSCRIBE</Button>
                <div className='lines16'></div>
              </Col>

              <Col>
              <div style={{
                position: 'relative',
                right: 35
              }}>
              <ul style={{
                      marginTop: 15,
                      listStyleType: "none"
                    }}>
                      <li style={{color: "black"}}>
                          <a href="">+32 493 79 42 23</a>
                      </li>
                      <li style={{color: "black"}}>
                        <a href="">
                          Send us an email
                        </a>
                      </li>
                    </ul>
                  </div>
              </Col>

              <Col>
                  <p style={{
                    color: "black",
                    marginTop: 10,
                    position: 'relative',
                    left: '45%'
                    }}>Instragram</p>
              </Col>
            </Row>
        </div>
        {/* <div className="header-top">
          <Link to="/">
            <Logo className="logo" src={logo} />
          </Link>
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        {/* <div className="header-content">
          <Title>See what's next</Title>
          <SubTitle>watch any where. cancel anytime</SubTitle>
          <Link to="/choose-plan">
            <Button className="main-offer-btn" primary>
              try it now
              <Icon className="Icon" size={37} icon={ic_keyboard_arrow_right} />
            </Button>
          </Link>
        </div>  */}
      </HeaderContainer>
    );
}

export default Radium(Header);

// Media
const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px'
});

// Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('tablet')`
    left: 20%;
  `}
`;




const HeaderContainer = styled.header`

 height: 300vh;

.Icon svg {
  vertical-align: bottom !important;
  margin-left: 1.5rem;
  ${customMedia.lessThan('smTablet')`
    display: none !important;
  `}
}

  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-wight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in; 
    &:hover {
      background: #d30913;
    }
    ${customMedia.lessThan('smTablet')`
      margin-top: 1.25rem;
      right: 5%;
    `}
  }



  // four columns
  .columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column1 {
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
  }

  .column2 {
    position: relative;
    left: 210;
    bottom: 10;
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
    ${customMedia.lessThan('smTablet')`
      position: relative;
      left: 250px;
  `}
  }

.column3 {
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
    ${customMedia.lessThan('smTablet')`
      position: relative;
      right: 400px;
      top: 60px;
  `}
  }
  
.column4 {
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
    position: relative;
    bottom: 2px;
    left: 90px;
    ${customMedia.lessThan('smTablet')`
      left: 400px;
      bottom: 15px;
    `}

    .fasearchicon {
      ${customMedia.lessThan('smTablet')`
       font-size: 30px;
    `}
    }
  }

 

  .cp {
    flex: 50%;
  }

  .filterStyle {
    border: 2px solid #e61c24;
    border-radius: 20px;
    width: 60px;
    height: 15px;
  }

  .twoLine {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }


  .lines2 {
    flex: 50%;
    position: relative;
    left: 30px;
    bottom: 10px;
    ${customMedia.lessThan('smTablet')`
       top: 30px;
 `}
  }

  .line2 {
    flex: 33.3333333%;
    position: relative;
    left: 30px;
    bottom: 10px;
  }

  .lines3 {
    border: 1px solid red;
    width: 90%;
    height: 0;
  }

  .lines4 {
    border: 1.5px solid red;
    width: 100%;
    height: 0.5px; 
  }

  .lines9 {
    border: 1px solid #ECECEC;
    flex: 90%;
    position: relative;
    left: 30px;
    bottom: 10px;
    margin-top: 30px;
  }

  
  .twoLine2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .lines5 {
    flex: 50%;
    position: relative;
    left: 30px;
    bottom: 10px;
  }

  .lines6 {
    border: 1px solid #ECECEC;
    width: 90%;
    height: 0;
    margin-top: 80px;
  }

  .lines16 {
    border: 1px solid #ECECEC;
    width: 80%;
    height: 0;
    margin-top: 10px;
  }

  .lines7 {
    border: 1px solid  #e61c24;
    width: 100%;
    height: 0;
    margin-top: 80px;
  }

  .twoPic {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .twl {
    flex: 50%;
    position: relative;
    left: 30px;
    bottom: 10px;
    color: #333;
  }
 
  .imgSwip {
    margin-left: 10px;
    width: 850px;
    height:90%;
    margin-top: 20px;
  }


  .imgSwip1 {
    width: 50%
  }


  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
  }

  // Header Content
  .header-content {
    width: 65%
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${customMedia.lessThan('smTablet')`
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;
    `}

    // Lg Main
    .main-offer-btn {
      ${customMedia.lessThan('lgDesktop')`
      margin: 0 33%;
      font-size: 1.5rem;
    `}
    
      ${customMedia.lessThan('mdDesktop')`
      margin: 0 25%;
      font-size: 1.5rem;
      `}
    
      ${customMedia.lessThan('tablet')`
        margin: 0 20%;
        font-size: 1.3rem;
      `}
    }
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
  color: #fff;
  ${customMedia.lessThan('tablet')`
    font-size: 2.6rem;
  `}
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.275rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan('smTablet')`
   font-size: 1.4rem;
   margin: 0;
  `}
`;
