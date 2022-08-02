import React, { Component, useState } from 'react'
import logo from '../svg/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import {Button} from './Button'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Fade as Hamburger } from 'hamburger-react'
import { FaSearch } from "react-icons/fa";
import { BiUser, BiShoppingBag } from "react-icons/bi";
import { useSpring, animated } from "react-spring";


function Header() {
    const [isOpen, setOpen] = useState(false);
    const [key, setKey] = useState(1);


    const scrolling = useSpring({
      from: { transform: "translate(60%,0)" },
      to: { transform: "translate(-60%,0)" },
      config: { duration: 9800 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    });


    return (
      <HeaderContainer className="header-container">
       <div className="columns">
          <div className="column1" style={{ flex: "25%"}}>
            <h3 style={{
              fontSize: 25,
              color: "#e61c24",
              marginBottom: 30,
              fontWeight: 200}}>GOLDWOOD</h3>
          </div>
          <div className="column2" style={{   position: 'relative',
              left: 210, bottom: 10}}>
          <Hamburger 
            size={22}
            color="#e61c24"
            toggled={isOpen} toggle={setOpen} 
            />
          </div>
          <div className="column3">
          <h3 style={{fontSize: 25,color: "#e61c24",
        fontWeight: 200, textTransform: 'uppercase'}}>Shop</h3>

          </div>
          <div className="column4"
          style={{position: 'relative',
          bottom: 2,
          left: 90}}>
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

            <FaSearch size={15} style={{
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
                <h2 style={{
                    color: "#e61c24", 
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    fontSize: 55,
                    marginTop: 15,
                    marginBottom: 15}}>
                SELECTOR OF FURNITURE AND FINE GOODS
                </h2>
              </animated.div>;
        </div>


        <div className='twoLine'>
          <div className='lines2'>
            <div className='lines4'></div>
          </div>
        </div>

        <h2 style={{
          marginTop: 60,
          letterSpacing: 1,
          fontSize: 60,
          fontWeight: 550,
          textAlign: 'center',
          color: "#e61c24"
        }}>
          GOLDWOOD BY BORIS
        
        </h2>

       
        <div className='twoLine2'>
          <div className='lines2'>
          <div className='lines6'></div>
          </div>
          <div className='lines2'>
            <div className='lines6'></div>
          </div>
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

export default Header;

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
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
  }

  
  .column3 {
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
  }

  
  .column4 {
    padding: 10px 10px 0 40px;
    flex: 25%;
    margin-top: 10px;
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
