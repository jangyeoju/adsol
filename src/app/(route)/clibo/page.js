'use client';

import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
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

import FilledRoundBtn from '@/components/button/FilledRoundBtn';
import SubBanner from '@/components/common/SubBanner';
import Footer from '@/components/footer/Footer';
import ContainerWrap from '@/components/layout/ContainerWrap';
import Nav from '@/components/nav/Nav';
import TechSubNav from '@/components/nav/TechSubNav';
import theme from '@/style/theme';

export default function Clibo() {
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
    <>
      <ThemeProvider theme={theme}>
        <NavWrap>
          <Nav select={'menu2'} page={'clibo'} />
        </NavWrap>
        <ProductWrap>
          <SubBannerWrap>
            <SubBanner title={'Product'}>
              <p>Sterilization Robot (CLIBO)</p>
            </SubBanner>
          </SubBannerWrap>
          <div className="content-wrap2">
            <h2 className="sub-title">
              Indoor Multi-Purpose Facility
              <br /> Disinfection Robot CLIBO
            </h2>
            <p className="sub-title-detail">
              It protects people from fine dust, viruses,
              <br />
              and bacteria in all environments where people live.
            </p>
            <div className="clibo-img-wrap">
              <img src="/img/product/side-img1.png" id="content-img1" />
              <img src="/img/product/content1.png" id="content-img2" />
              <img src="/img/product/side-img2.png" id="content-img3" />
            </div>
          </div>
          <BackgroundBanner>
            <ContainerWrap>
              <h2>
                Enjoy clean air free from viruses
                <br /> with <strong className="montserrat">CLIBO</strong>
              </h2>
              <FilledRoundBtn
                text={'Disinfection and Clean Air Expert, CLIBO'}
              />
            </ContainerWrap>
          </BackgroundBanner>
          <div className="content-wrap background-img">
            <Container>
              <h2>
                <strong className="montserrat">CLIBO</strong>
              </h2>
              <p>
                performs disinfection of contact viruses, air sterilization,
                <br /> and air purification in indoor multi-purpose facilities.{' '}
                <br />
                It automatically replaces the battery and filter,
                <br /> reducing production costs and
                <br /> shortening the timeline.
                <br /> It can respond to customer needs.
              </p>
              <ul className="clibo-info-list">
                <li>
                  <CheckIcon />
                  Equipped with Multiple Patented Technologies
                </li>
                <li>
                  <CheckIcon />
                  Mold-free Enclosure Technology
                </li>
                <li>
                  <CheckIcon />
                  Human-Safe Sterilization Light Source
                </li>
                <li>
                  <CheckIcon />
                  Automatic filter and battery replacement station.
                </li>
                <li>
                  <CheckIcon />
                  K-Design Award Winner
                </li>
              </ul>
            </Container>
          </div>
          <ContentSection>
            <ContainerWrap>
              <div className="content-wrap" id="sec1">
                <div className="content-title-wrap">
                  <div className="content-title-box">
                    <h2>CLIBO Configuration</h2>
                  </div>
                  <div className="content-info-list">
                    <h3>Large Area Autonomous Disinfection Robot</h3>
                    <ul className="content-detail-info-list">
                      <li>
                        3 Unique Technologies by Advance Solution
                        <br />
                        (Enclosure Technology AHS, Robot Technology ARS, Light
                        Source Technology ASS)
                      </li>
                      <li>Surface and Air Sterilization Function</li>
                      <li>Fine Dust Removal Function</li>
                      <li>Automatic Battery and Filter Replacement</li>
                    </ul>
                  </div>
                </div>
                <div className="content-img-box gray-bg">
                  <img src="/img/product/product-wrap.png" alt="product-wrap" />
                </div>
              </div>
            </ContainerWrap>
          </ContentSection>
          <ContentSection className="bg-color">
            <ContainerWrap>
              <div className="content-wrap" id="sec2">
                <div className="content-title-wrap">
                  <div className="content-title-box">
                    <h2>CLIBO's Clean Function</h2>
                  </div>
                  <div className="content-info-list">
                    <h3>
                      Surface and Air Sterilization Function + Fine Dust Removal
                      Function
                    </h3>
                    <ul className="content-detail-info-list">
                      <li>
                        Sterilization of external surfaces and air using a
                        human-safe sterilization light source
                      </li>
                      <li>
                        Air sterilization inside using a high-sterilization UV-C
                        (Ultraviolet) light source
                      </li>
                      <li>
                        Fine dust removal through a HEPA filter and exhaust fan
                      </li>
                      <li>
                        Automatic replacement of used filters with new ones
                        through the station
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-img-box">
                  <ul className="content-img-box-wrap">
                    <li>
                      <div>
                        <img src="/img/product/box-img1.png" alt="box-img1" />
                        <div className="dp-img-wrap">
                          <img
                            src="/img/product/box-img1-1.png"
                            alt="box-img1-1"
                          />
                          <img
                            src="/img/product/box-img1-2.png"
                            alt="box-img1-1"
                          />
                        </div>
                      </div>
                      <p>
                        Sterilization of airborne viruses
                        <br /> with a safe, storage-type UV light source
                      </p>
                    </li>
                    <li>
                      <div>
                        <img src="/img/product/box-img2.png" alt="box-img2" />
                        <div className="dp-img-wrap">
                          <img
                            src="/img/product/box-img2-1.png"
                            alt="box-img2-1"
                          />
                          <img
                            src="/img/product/box-img2-2.png"
                            alt="box-img2-1"
                          />
                        </div>
                      </div>
                      <p>
                        Fine dust air purification
                        <br /> using a HEPA filter
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </ContainerWrap>
          </ContentSection>
          <ContentSection>
            <ContainerWrap>
              <div className="content-wrap" id="sec3">
                <div className="content-title-wrap">
                  <div className="content-title-box">
                    <h2>CLIBO Applied Technologies</h2>
                  </div>
                  <div className="content-info-list">
                    <h3>Station + Design + Autonomous Driving Technology</h3>
                    <div>
                      <ul className="content-detail-info-list">
                        <li>
                          Automatic removal of used filters and replacement with
                          new ones
                        </li>
                        <li>
                          Automatic removal of discharged batterie and
                          replacement with fully charged ones
                        </li>
                        <li>
                          Design Reflecting Functionality, Economy, and
                          Aesthetics
                        </li>
                        <li>K-Design Award Winner</li>
                      </ul>
                      <ul className="content-detail-info-list">
                        <li>
                          Driving algorithm for pre-cleaning contaminated areas
                        </li>
                        <li>
                          Continuous power supply and automatic battery swap for
                          energy efficiency
                        </li>
                        <li>
                          Mold minimization and enclosure with no screw marks
                          when using common parts
                        </li>
                        <li>
                          Modular structure, improved productivity, and
                          one-touch coupling method for easy management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content-img-box gray-bg ptb-5">
                  <img
                    src="/img/product/content2.png"
                    alt="product-wrap"
                    id="product-img3"
                  />
                </div>
              </div>
            </ContainerWrap>
          </ContentSection>
          <Divider />
          <SolutionWrap>
            <ContainerWrap>
              <h1 className="sub-title montserrat">
                <strong className="montserrat">CLIBO</strong> by
                Advance-Solution
              </h1>
              <p>
                Targeted for Public Institutions such as schools, hospitals,
                airports, and rental services for hospitals,
                <br /> nursing homes, and postpartum care centers, as well as
                for logistics centers,
                <br /> food factories, meat processing plants, and barns in
                Japan, the robot is used to improve air quality
                <br /> through surface sterilization and purification, ensuring
                the safety of citizens.
              </p>
              <ul className="solution-list">
                <li>
                  <AddIcon />
                  <h4>CLIBO</h4>
                  <p>by Advance-Solution</p>
                </li>
                <li>
                  <img src="/img/main/icon/icon1.svg" />
                  <h2>Rental Services</h2>
                  <p>
                    Hospitals
                    <br />
                    Nursing Homes
                    <br />
                    Postpartum Care Centers
                  </p>
                  <div className="add-icon">
                    <img src="/img/main/icon/add.svg" />
                  </div>
                </li>
                <li>
                  <img src="/img/main/icon/icon2.svg" />
                  <h2>Public Institutions</h2>
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
                  <h2>General Sales</h2>
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
        </ProductWrap>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const NavWrap = styled(Box)`
  position: relative;
  height: 150px;
  @media ${() => theme.device.mobile} {
    height: 130px;
  }
`;

const SubBannerWrap = styled(Box)`
  position: relative;
  /* margin-top: 100px; */
`;

const ProductWrap = styled(Box)`
  .bg-color {
    background-color: #f9f9ff;
  }
  .ptb-5 {
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    img {
      width: 90%;
    }
  }
  .content-wrap {
    padding: 10rem 0;
  }
  .content-wrap2 {
    padding-top: 13rem;
  }
  .sub-title {
    font-size: 3.5rem;
    font-weight: bold;
    color: ${() => theme.colors.textColor};
    line-height: 150%;
    text-align: center;
    strong {
      font-size: 3.5rem;
      font-weight: bold;
      color: ${() => theme.colors.primary2};
    }
  }
  .sub-title-detail {
    font-size: 1.8rem;
    line-height: 150%;
    font-weight: 400;
    color: ${() => theme.colors.textColor2};
    text-align: center;
    margin-top: 1rem;
  }
  .clibo-img-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    #content-img1 {
      width: 21%;
    }
    #content-img3 {
      width: 20%;
    }
    #content-img2 {
      width: 40%;
    }
  }
  .background-img {
    background-image: url(../../img/product/background-img.png);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 740px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h2 {
      font-size: 4rem;
      font-weight: bold;
      color: ${() => theme.colors.textColor};
      line-height: 150%;
      strong {
        font-size: 4rem;
        font-weight: bold;
        color: ${() => theme.colors.primary2};
      }
    }
    p {
      font-size: 2rem;
      line-height: 150%;
      font-weight: 400;
      color: ${() => theme.colors.textColor2};
      text-align: left;
      margin-top: 1rem;
    }
    .clibo-info-list {
      background-color: rgba(249, 249, 255, 0.6);
      border-radius: 8px;
      padding: 2rem;
      width: 580px;
      margin-top: 5rem;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        font-size: 1.8rem;
        color: ${() => theme.colors.textColor2};
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 0.5rem;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media ${() => theme.device.tablet} {
    .sub-title {
      font-size: 3rem;
    }
    .sub-title-detail {
      font-size: 1.8rem;
    }
    .content-wrap {
      padding: 8rem 0;
    }
    .content-wrap2 {
      padding-top: 8rem;
    }
    .clibo-img-wrap {
      margin-top: 5rem;
      #content-img2 {
        width: 50%;
      }
      #content-img3 {
        width: 18%;
      }
      #content-img1 {
        width: 18%;
      }
    }
    .background-img {
      height: auto;
      h2 {
        font-size: 3rem;
        strong {
          font-size: 3rem;
        }
      }
      p {
        font-size: 1.8rem;
      }
      .clibo-info-list {
        margin-top: 3rem;
        li {
          font-size: 1.6rem;
        }
      }
    }
  }
  @media ${() => theme.device.mobile} {
    .sub-title {
      font-size: 2.8rem;
      padding: 0 2rem;
    }
    .sub-title-detail {
      font-size: 1.6rem;
    }
    .content-wrap {
      padding: 5rem 0;
    }
    .content-wrap2 {
      padding-top: 5rem;
    }
    .background-img {
      p {
        font-size: 1.6rem;
        br {
          display: none;
        }
      }
      .clibo-info-list {
        width: 80%;
        li {
          font-size: 1.4rem;
          align-items: flex-start;
        }
      }
    }
  }
  @media ${() => theme.device.mobile3} {
    .sub-title {
      font-size: 2.2rem;
      strong {
        font-size: 2.2rem;
      }
    }
    .sub-title-detail {
      font-size: 1.4rem;
    }
    .clibo-img-wrap {
      margin-top: 2rem;
    }
    .background-img {
      .clibo-info-list {
        width: 100%;
      }
    }
  }
`;

const BackgroundBanner = styled(Box)`
  background-color: ${() => theme.colors.primary};
  padding: 10rem 0;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 3rem;
      font-weight: bold;
      color: #fff;
      line-height: 150%;
      strong {
        font-size: 3rem;
        font-weight: bold;
      }
    }
    button {
      background-color: #fff;
      color: ${() => theme.colors.primary};
    }
  }
  @media ${() => theme.device.tablet} {
    padding: 8rem 0;
    & > div {
      flex-direction: column;
      align-items: flex-start;
    }
    button {
      margin-top: 2rem;
    }
  }
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
    & > div {
      align-items: center;
      h2 {
        font-size: 2.4rem;
        text-align: center;
        strong {
          font-size: 2.4rem;
        }
      }
    }
    button {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;

const ContentSection = styled(Box)`
  .content-title-wrap {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .content-title-box {
      width: 30%;
      min-width: 300px;
      background-color: ${() => theme.colors.primary};
      border-radius: 8px;
      padding: 1rem 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 2.8rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }
    }
    .content-info-list {
      width: 68%;
      h3 {
        font-size: 2rem;
        font-weight: bold;
        color: ${() => theme.colors.textColor};
        line-height: 150%;
      }
      ul {
        padding: 0 0 0 1.5rem;
        margin: 1rem 0 0 0;
        li {
          list-style: disc;
          font-size: 1.6rem;
          color: ${() => theme.colors.textColor2};
          line-height: 150%;
          font-weight: 500;
        }
      }
      .dp-wrap {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
      }
    }
  }
  .content-img-box {
    margin-top: 5rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    img {
      width: 70%;
    }
    .content-img-box-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5rem 0;
      li {
        width: 49%;
        height: 548px;
        border-radius: 16px;
        padding: 3rem;
        background-color: #f8f8f8;
        img:first-of-type:not(.dp-img-wrap img) {
          width: 100%;
          height: 250px;
          margin-bottom: 2rem;
        }
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .dp-img-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          img {
            width: 49%;
            height: 150px;
          }
        }
        p {
          font-size: 1.6rem;
          font-weight: 400;
          color: ${() => theme.colors.textColor};
          line-height: 150%;
          text-align: center;
          margin-top: 2rem;
        }
      }
    }
  }
  .gray-bg {
    background-color: #f8f8f8;
  }
  @media ${() => theme.device.tablet} {
    .content-title-wrap {
      flex-direction: column;
      align-items: flex-start;
      .content-title-box {
        width: 100%;
        height: 80px;
        margin-bottom: 2rem;
        h2 {
          font-size: 2.4rem;
        }
      }
      .content-info-list {
        width: 100%;
      }
    }
    .content-img-box {
      margin-top: 3rem;
      .content-img-box-wrap {
        padding: 3rem;
      }
    }
  }
  @media ${() => theme.device.mobile} {
    .content-img-box {
      .content-img-box-wrap {
        flex-direction: column;
        li {
          width: 100%;
          height: auto;
          img:first-of-type:not(.dp-img-wrap img) {
            height: 180px;
          }
        }
        li:first-of-type {
          margin-bottom: 2rem;
        }
      }
    }
    #product-img3 {
      width: 100%;
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
        font-size: 2.2rem;
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
