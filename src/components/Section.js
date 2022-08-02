import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';
import Tv from '../images/tv.png';
import Tv2 from '../images/tv2.jpg';
import Tv3 from '../images/device-pile.png';
import '../css/styles.css';

class Section extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };

  render() {
    
    return (
      <FooterContainer>
       <div className='sectionBody'>
            <div className='sectionText'>
                <h1 className='sectionFonts'>Enjoy on your TV</h1>
                <p className='sectionPara'>Watch on Smart TVs, Playstation, Xbox, <br/> Chromecast, 
                    Apple TV, Blu-ray players, and <br/> more.
                </p>
            </div>
            <div className='sectionImage'>
                <img 
                    src={Tv}
                    alt="tv"
                   
                    />
            </div>
       </div>

       <div className="sectionsBody" style={{ 
                display: 'flex', 
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 20,
                borderBottom: '5px solid #333',
                paddingBottom: 40
                }}
                >
            <div class="sectionsUptext">
                <img 
                    src={Tv2}
                    alt="tv"
                    style={{
                        position: 'relative',
                        bottom: '35%'
                    }}
                    />
            </div>
            <div className='sectionsText'>
              <h1 className='sectionsTitle' style={{
                      fontSize: 45,
                      color: 'white',
                      fontWeight: '700',
                      letterSpacing: 2
                  }}>Download your shows <br/>to watch offline.</h1>
                  <p className='sectionsSubtitle'
                  style={{
                      fontSize: 18,
                      color: 'white',
                      fontWeight: '300',
                      position: 'relative',
                      top: 15,
                      letterSpacing: 2,
                      lineHeight: 1.5
                  }}>Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV without
                  <br/> paying more.
                  </p>
            </div>
       </div>
       <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 20,
                position: 'relative',
                bottom: -50,
                borderBottom: '5px solid #333',
                paddingBottom: 40
                }}>
            <div className='sectionText'>
                <h1 style={{
                    fontSize: 45,
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: 2
                }}>Watch everywhere.</h1>
                <p 
                style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: '300',
                    position: 'relative',
                    top: 15,
                    letterSpacing: 2,
                    lineHeight: 1.5
                }}>Stream unlimited movies and TV shows on <br/> your phone, tablet, laptop, and TV without <br/>
                 paying more.
                </p>
            </div>
            <div className='sectionImage2'>
                
                <img 
                    src={Tv3}
                    alt="tv"
                    style={{

                    }}
                    />
            </div>
       </div>
      </FooterContainer>
    );
  }
}

export default Section;

// Media
const customMedia = generateMedia({
  tablets: '740px',
  smDesktop: '1440px',
  tablet: '960px'
});

// Main Footer Container
const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 5rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: repeat(2, 1fr);
    `}
  }

  .sectionBody {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    border-top: 5px solid #333;
    border-bottom: 5px solid #333;
    position: relative;
    top: -80px;
    padding-bottom: 80px;

    ${customMedia.lessThan('tablet')`
      padding-top:5px
    `}

    ${customMedia.lessThan('smDesktop')`
      padding-top:5px
    `}
    
  }

  .sectionText{
    position: relative;
    top: 150px;

    ${customMedia.lessThan('tablet')`
      top: 60px;
      text-align: center;
  `}

    ${customMedia.lessThan('smDesktop')`
        top: 70px;
        margin-top: 80px;
        text-align: center;
  `}
  }


  .sectionFonts{
    font-size: 60px;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;

    ${customMedia.lessThan('tablet')`
        font-size: 50px;
    `}
  }

  .sectionPara {
    font-size: 25px;
    color: white;
    font-weight: 300;
    position: relative;
    top: 15px;
    letter-spacing: 1px;
    line-height: 1.5;

    ${customMedia.lessThan('tablet')`
      font-size: 18px;
    `
  }
}

  .sectionImage{
    margin-top: 50px;
  }

  .sectionImage2 {
    margin-top: 120px;
  }



.sectionsBody{
  display: flex, 
  justity-content: space-around;
  flex-wrap: wrap;
  padding: 20px,
  border-bottom: 5px solid #333,
  padding-bottom: 40px
}
  .sectionsUptext {
    position: relative;
    top: 130px;
    ${customMedia.lessThan('smDesktop')`
        top: 100px;
        
  `
}
  }

  .sectionsText{
    ${customMedia.lessThan('smDesktop')`
        text-align: center;
  `
  }

  .sectionsTitle {
    ${customMedia.lessThan('tablets')`
        font-size: 40px;
        color: green;
    `
  }
  }
  
  .sectionsSubtitle {
  ${customMedia.lessThan('tablets')`
      font-size: 14px;
  `
  }
  }
}


  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }

  // Toggle Language Content
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;

