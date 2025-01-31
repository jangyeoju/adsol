'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';
import { createGlobalStyle } from 'styled-components';

import FilledRoundBtn from '../components/button/FilledRoundBtn';
import Footer from '../components/footer/Footer';
import ContainerWrap from '../components/layout/ContainerWrap';
import Nav from '../components/nav/Nav';
import theme from '../style/theme';

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
    palette: {
      primary: {
        main: '#5D62FF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <MainWrap>
        <div className="main-background">
          <ContainerWrap>
            <h3>Quarantine Robot CLIBO for Indoor Multi-use Facilities</h3>
            <h1 className="montserrat">CLIBO</h1>
            <p>
              In the presence of people, harmless to the human body
              <br />
              It sterilizes air purification and even contact viruses.
            </p>
            <FilledRoundBtn text={'Go to see the product'} link={'/clibo'} />
          </ContainerWrap>
          <div className="scroll-down-wrap"></div>
        </div>
        <ContainerWrap>
          <div className="video-wrap">
            <div className="video-box">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/POfhtka6sgM?si=oERIG4mpSSz2FyIY?autoplay=1&mute=1&controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </ContainerWrap>
        <ServiceBoxList>
          <ContainerWrap>
            <h1 className="title">
              A world free from viruses and fine dust
              <br /> <strong className="montserrat">
                Advance Solution
              </strong>{' '}
              will create it.
            </h1>
            <ul className="service-list">
              <li id="service1" className="service-box">
                <h2>Surface contact virus sterilization</h2>
              </li>
              <li id="service2" className="service-box">
                <h2>Air purification disinfection</h2>
              </li>
              <li id="service3" className="service-box">
                <h2>Fine dust air purification</h2>
              </li>
              <li id="service4" className="service-box">
                <h2>Pollution-oriented driving</h2>
              </li>
              <li id="service5" className="service-box">
                <h2>Automatic replacement station</h2>
              </li>
              <li id="service6" className="service-box">
                <h2>Modular and one-touch enclosures</h2>
              </li>
            </ul>
          </ContainerWrap>
        </ServiceBoxList>
        <SolutionWrap>
          <ContainerWrap>
            <h1 className="title montserrat">
              <strong className="montserrat">CLIBO</strong> by Advance-Solution
            </h1>
            <p>
              Public institutions (national public hospitals, airports,
              government offices), <br />
              which are large-area multi-use facilities, Application to
              educational facilities (school, auditorium)
              <br />
              Application to hospitals, nursing homes, postpartum care centers,
              etc. through rental service
            </p>
            <ul className="solution-list">
              <li>
                <AddIcon />
                <h4>CLIBO</h4>
                <p>by Advance-Solution</p>
              </li>
              <li>
                <img src="/img/main/icon/icon1.svg" />
                <h2>Rental service</h2>
                <p>
                  Hospitals
                  <br />
                  nursing homes
                  <br />
                  postpartum care centers
                </p>
                <div className="add-icon">
                  <img src="/img/main/icon/add.svg" />
                </div>
              </li>
              <li>
                <img src="/img/main/icon/icon2.svg" />
                <h2>Public institutions</h2>
                <p>
                  Public Procurement Service
                  <br />
                  Innovative Products
                </p>
                <div className="add-icon">
                  <img src="/img/main/icon/add.svg" />
                </div>
              </li>
              <li>
                <img src="/img/main/icon/icon3.svg" />
                <h2>General sale</h2>
                <p>
                  Logistics Centers
                  <br />
                  Food Factories
                  <br />
                  Meat Processing Plants
                  <br />
                  Barns
                </p>
              </li>
            </ul>
          </ContainerWrap>
        </SolutionWrap>
        <Footer />
      </MainWrap>
    </ThemeProvider>
  );
}

const MainWrap = styled(Box)`
  /* .montserrat{
    font-family: "Montserrat", serif;
    font-weight: bold;
  } */
  .title {
    font-size: 4rem;
    font-weight: bold;
    color: ${() => theme.colors.textColor};
    line-height: 150%;
    text-align: center;
    line-break: auto;
    strong {
      color: ${() => theme.colors.primary2};
      font-size: 4rem;
    }
  }
  .main-background {
    background-image: url(../img/main/main_background.png);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 8rem;
      color: ${() => theme.colors.textColor};
    }
    h3 {
      font-size: 2.2rem;
      color: ${() => theme.colors.textColor};
      font-weight: 500;
      line-height: 150%;
    }
    p {
      font-size: 2.2rem;
      color: ${() => theme.colors.textColor2};
      font-weight: 400;
      line-height: 150%;
      margin: 2rem 0 5rem 0;
    }
    .scroll-down-wrap {
      position: absolute;
      bottom: 3.5%;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(../img/main/icon/scroll-down.svg);
      background-position: center;
      background-size: contain;
      animation: float 2s ease-in-out infinite;
      opacity: 0.6;

      @keyframes float {
        0% {
          transform: translateY(0) translateX(-50%);
        }
        50% {
          transform: translateY(-15px) translateX(-50%);
        }
        100% {
          transform: translateY(0) translateX(-50%);
        }
      }
    }
  }
  .video-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 13rem 0;
    height: 100%;
    width: 100%;
    .video-box {
      width: 100%;
      height: 0;
      padding-top: 56.25%; /* 가장 중요 */
      position: relative;
    }
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 20px;
      top: 0;
      left: 0;
      border: none;
    }
  }

  @media ${() => theme.device.tablet} {
    .main-background {
      background-image: url(../img/main/mobile_background.png);
      background-position: center;
      justify-content: flex-start;
      padding-top: 15rem;
      & > div {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      h1 {
        font-size: 4rem;
        text-align: center;
      }
      h3 {
        font-size: 1.6rem;
        text-align: center;
      }
      p {
        font-size: 1.6rem;
        text-align: center;
        margin: 2rem 0 4rem 0;
        br {
          display: none;
        }
      }
    }
    .title {
      font-size: 3rem;
      br {
        display: none;
      }
      strong {
        font-size: 3rem;
      }
    }
  }

  @media ${() => theme.device.mobile3} {
    .main-background {
      padding-top: 15rem;
      h1 {
        font-size: 3.5rem;
      }
      h3 {
        font-size: 2rem;
      }
      p {
        margin: 1.5rem 0 3rem 0;
      }
    }
    .title {
      font-size: 2.4rem;
      strong {
        font-size: 2.4rem;
      }
    }
    .video-wrap {
      padding: 5rem 0 8rem 0;
    }
  }
`;

const ServiceBoxList = styled(Box)`
  background-image: url(../img/main/sub_background.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 13rem 0 11rem 0;
  h1 {
    margin-bottom: 8rem;
    color: #fff !important;
    strong {
      color: #fff !important;
    }
  }
  .service-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    #service1 {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.527),
          rgba(0, 0, 0, 0.5)
        ),
        url(../img/main/service/service1.png);
      transition: all 0.3s ease-in-out;
    }
    #service2 {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.527),
          rgba(0, 0, 0, 0.5)
        ),
        url(../img/main/service/service2.png);
      transition: all 0.3s ease-in-out;
    }
    #service3 {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.527),
          rgba(0, 0, 0, 0.5)
        ),
        url(../img/main/service/service3.png);
      transition: all 0.3s ease-in-out;
    }
    #service4 {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.527),
          rgba(0, 0, 0, 0.5)
        ),
        url(../img/main/service/service4.png);
      transition: all 0.3s ease-in-out;
    }
    #service5 {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.527),
          rgba(0, 0, 0, 0.5)
        ),
        url(../img/main/service/service5.png);
      transition: all 0.3s ease-in-out;
    }
    #service6 {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.527),
          rgba(0, 0, 0, 0.5)
        ),
        url(../img/main/service/service6.png);
      transition: all 0.3s ease-in-out;
    }

    .service-box {
      height: 280px;
      width: 32%;
      border-radius: 24px;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      backdrop-filter: rgba(0, 0, 0, 0.6);
      margin-bottom: 2rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      h5 {
        font-size: 1.4rem;
        color: #fff;
        font-weight: 300;
        line-height: 150%;
        margin-bottom: 0.5rem;
        opacity: 0.8;
      }
      h2 {
        font-size: 2.4rem;
        color: #fff;
        font-weight: bold;
        line-height: 150%;
      }
    }

    #service1:hover {
      background-image: linear-gradient(
          180deg,
          rgba(93, 98, 255, 0.5) 0%,
          rgba(93, 98, 255, 0.5) 100%
        ),
        url(../img/main/service/service1.png);
    }
    #service2:hover {
      background-image: linear-gradient(
          180deg,
          rgba(93, 98, 255, 0.5) 0%,
          rgba(93, 98, 255, 0.5) 100%
        ),
        url(../img/main/service/service2.png);
    }
    #service3:hover {
      background-image: linear-gradient(
          180deg,
          rgba(93, 98, 255, 0.5) 0%,
          rgba(93, 98, 255, 0.5) 100%
        ),
        url(../img/main/service/service3.png);
    }
    #service4:hover {
      background-image: linear-gradient(
          180deg,
          rgba(93, 98, 255, 0.5) 0%,
          rgba(93, 98, 255, 0.5) 100%
        ),
        url(../img/main/service/service4.png);
    }
    #service5:hover {
      background-image: linear-gradient(
          180deg,
          rgba(93, 98, 255, 0.5) 0%,
          rgba(93, 98, 255, 0.5) 100%
        ),
        url(../img/main/service/service5.png);
    }
    #service6:hover {
      background-image: linear-gradient(
          180deg,
          rgba(93, 98, 255, 0.5) 0%,
          rgba(93, 98, 255, 0.5) 100%
        ),
        url(../img/main/service/service6.png);
    }
  }

  @media ${() => theme.device.mobile} {
    padding: 8rem 0;
    h1 {
      margin-bottom: 5rem;
    }
    .service-list {
      .service-box {
        width: 48%;
        height: 18rem;
        padding: 2rem;
        h2 {
          font-size: 2rem;
        }
        h5 {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const SolutionWrap = styled(Box)`
  padding: 13rem 0;
  p {
    font-size: 2rem;
    color: ${() => theme.colors.textColor2};
    line-height: 150%;
    font-weight: 400;
    text-align: center;
    margin-top: 2rem;
  }
  .solution-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8rem;
    li:first-of-type {
      background-color: ${() => theme.colors.primary};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      position: relative;
      h4 {
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
        font-family: 'Montserrat', serif;
        font-weight: bold;
      }
      p {
        color: #fff;
        font-weight: 400;
        line-height: 150%;
        font-size: 1.6rem;
        font-family: 'Montserrat', serif;
      }
      svg {
        position: absolute;
        top: 4rem;
        right: 4rem;
        color: #fff;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    li {
      padding: 4rem;
      border-radius: 24px;
      width: 24%;
      height: 26rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      position: relative;
      img {
        width: 25px;
        height: 25px;
      }
      h2 {
        font-size: 2.4rem;
        font-weight: bold;
        color: ${() => theme.colors.textColor};
        margin: 1rem 0 1.5rem 0;
      }
      p {
        font-size: 1.6rem;
        text-align: left;
        line-height: 150%;
        margin-top: 0;
        font-weight: 400;
      }
      .add-icon {
        position: absolute;
        top: 50%;
        right: -20px;
        z-index: 9;
      }
    }
  }

  @media ${() => theme.device.mobile} {
    padding: 8rem 0;
    p {
      font-size: 1.6rem;
    }
    .solution-list {
      margin-top: 5rem;
      li:first-of-type {
        h4 {
          font-size: 2.4rem;
        }
      }
      li {
        h2 {
          font-size: 2rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media ${() => theme.device.mobile2} {
    p {
      br:not(.solution-list li p br) {
        display: none;
      }
    }
    .solution-list {
      flex-direction: column;
      li {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
        .add-icon {
          top: auto;
          bottom: -25px;
          right: 50%;
          z-index: 9;
        }
      }
    }
  }
`;

const videoWrapStyles = `
  .video-wrap {
    transition: position 0.3s ease;
  }
  .video-wrap.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${videoWrapStyles}
`;
