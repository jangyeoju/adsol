"use client"
import * as React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "@/app/style/theme";
import Nav from "@/app/components/nav/Nav";
import ContainerWrap from "@/app/components/layout/ContainerWrap";
import SubBanner from "@/app/components/common/SubBanner";
import Footer from "@/app/components/footer/Footer";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';

import {Wrapper} from "@googlemaps/react-wrapper"
import Map1 from "@/app/components/map/Map1";
import Map3 from "@/app/components/map/Map3";
import Map2 from "@/app/components/map/Map2";

export default function Contact() {

    const theme = createTheme({
      typography:{
        fontFamily : "Pretendard"
      },
      palette: {
          primary: {
            main: "#5D62FF",
          },
      },
  })

  return(
    <>
        <ThemeProvider theme={theme}>
            <NavWrap>
                <Nav select={"menu3"} page={"contact"}/>
            </NavWrap>
            <ContactWrap>
                <ContactBanner>
                    <ContainerWrap>
                        <div className="title-wrap">
                            <h1 className="montserrat">Contact Us</h1>
                            <div className="border"></div>
                        </div>
                        <div className="info-box">
                            <h2>Inquiries</h2>
                            <ul className="info-item">
                                <li>
                                    <PhoneInTalkIcon/>
                                    <h3>070-8887-0625</h3>
                                </li>
                                <li>
                                    <EmailIcon/>
                                    <h3>adsol@adsol.kr</h3>
                                </li>
                                <li>
                                    <FaxIcon/>
                                    <h3>050-4160-5502</h3>
                                </li>
                            </ul>
                        </div>
                    </ContainerWrap>
                </ContactBanner>
                <div className="contact-content">
                    <ContainerWrap>
                        <h1 className="title">
                        Directions to Advance Solutions
                        </h1>
                        <p className="sub-title-text">Check the map of Advance Solutions</p>
                        <ul className="map-list">
                            <li className="map-item">
                                <StyledWrapper apiKey={"AIzaSyBkNBxTatAowreaA0jgD4IqFy741UJnCL0"}>
                                    <Map1/>
                                </StyledWrapper>
                                <h2>Headquarters </h2>
                                <h3>527, Startup Incubation Center, 55 Hanyangdaehak-ro, Sangnok-gu, Ansan-si, Gyeonggi-do, South Korea (Sadong)</h3>
                            </li>
                            <li className="map-item">
                                <StyledWrapper apiKey={"AIzaSyBkNBxTatAowreaA0jgD4IqFy741UJnCL0"}>
                                    <Map2/>
                                </StyledWrapper>
                                <h2>Branch Office</h2>
                                <h3>1303, Shinil IT Uto Knowledge Industrial Center, 13 LS-ro, Dangjeong-dong, Gunpo-si, Gyeonggi-do, South Korea</h3>
                            </li>   
                            <li className="map-item">
                                <StyledWrapper apiKey={"AIzaSyBkNBxTatAowreaA0jgD4IqFy741UJnCL0"}>
                                    <Map3/>
                                </StyledWrapper>
                                <h2>Corporate R&D Center</h2>
                                <h3>780, Pangyo Startup Zone, Business Support Hub, 815 Daewangpangyo-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, South Korea</h3>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>           
            </ContactWrap>
            <Footer/>
        </ThemeProvider>
    </>
  )
}

const NavWrap = styled(Box)`
    position: relative;
    height: 100px;
    @media ${() => theme.device.mobile} {
        height: 80px;
    }
`;


const ContactWrap = styled(Box)`
    .contact-content{
        padding: 10rem 0;
        .map-list{
            display: flex;
            align-items: center;
            margin-top: 8rem;
            justify-content: space-between;
            .map-item{
                width: 32%;
          
                &>div{
                    width: 100% !important; 
                    margin-bottom : 2rem;
                    height : 250px;
                }
                h2{
                    font-size: 2rem;
                    font-weight: bold;
                    color: ${()=> theme.colors.textColor};
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    padding-bottom: 1rem;
                    margin-bottom: 2rem;
                    width: 100%;
                }
                h3{
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 150%;
                    color: ${()=> theme.colors.textColor2};
                }
            }
        }
    }
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: ${()=> theme.colors.textColor};
        line-height: 150%;
        text-align: center;
        line-break: anywhere;
    }
    .sub-title-text{
        font-size: 2rem;  
        margin-top: 1rem;
        color: ${()=> theme.colors.textColor2};
        font-weight: 400;
        text-align: center;
    }

    @media ${() => theme.device.mobile} {
        .contact-content{
            padding: 8rem 0;
            .map-list{
                margin-top: 5rem;
                flex-direction: column;
                .map-item{
                    margin-bottom: 3rem;
                    width: 100%;
                }
                .map-item:last-of-type{
                    margin-bottom: 0;
                }
            }
        }
        .title{
            font-size: 3rem;
        }
        .sub-title-text{
            font-size: 1.6rem;
        }
    }
`;

const ContactBanner = styled(Box)`
    padding: 10rem 0;
    background-image: url("/img/contact/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 4rem;
        font-weight: bold;
        color: #fff;
    }
    .border{
        border-bottom: 4px solid #fff;
        width: 80px;
        margin-top: 3rem;
    }
    &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-wrap{
            width: 50%;
        }
        .info-box{
            width: 48%;
            background-color: #fff;
            padding: 4rem;
            border-radius: 1rem;
            h2{
                font-size: 2.4rem;
                font-weight: bold;
                color: ${()=> theme.colors.textColor};
                margin-bottom: 3rem;
            }
            ul{
                li{
                    display: flex;
                    align-items: center;
                    margin-bottom: 2rem;
                    h3{
                        font-size: 1.8rem;
                        font-weight: 400;
                        color: ${()=> theme.colors.textColor};
                    }
                    svg{
                        width: 2rem;
                        height: 2rem;
                        color: ${()=> theme.colors.textColor};
                        margin-right: 2rem;
                    }
                }
                li:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
    @media ${() => theme.device.mobile} {
        padding: 8rem 0;
        &>div{
            flex-direction: column;
            .title-wrap{
                width: 100%;
                margin-bottom: 3rem;
                .border{
                    width: 10%;
                }
            }
            .info-box{
                width: 100%;
                padding: 3rem;
                h2{
                    font-size: 2rem;
                }
            }
        }
        h1{
            font-size: 3rem;
        }
    }
`;

const StyledWrapper = styled(Wrapper)`
    width:100%;
`;