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
import Link from "next/link";
import TechSubNav from "@/app/components/nav/TechSubNav";
export default function Technology() {

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
        <TechNavWrap>
            <Nav select={"menu2"} page={"tech"}/>
        </TechNavWrap>
         <TechnologyWrap>
            <SubBannerWrap>
                <SubBanner title={"Technology"}>
                    <p>
                    Advance Solutions is a ROBOT solution company<br/> that makes realizable changes now with a different perspective.
                    </p>
                </SubBanner>
            </SubBannerWrap>
            <ContainerWrap>
                <ul className="technology-info-box">
                    <li>
                        <h5>01</h5>
                        <h3>convergence technology crystal</h3>
                        <p>
                        It has core manufacturing technology of robots, the crystallization of convergence technology, to develop and produce convenient and fast price competitive robots regardless of the type of robot.
                        </p>
                    </li>
                    <li>
                        <h5>02</h5>
                        <h3>Independently Developed Proprietary Robot</h3>
                        <p>
                        Based on our in-house capabilities, we develop new items and adopt a strategy of internalizing key components. By choosing domestic processing and manufacturing, we reduce costs and drive improvements, delivering innovative and unique robots exclusively from Advance Solution.
                        </p>
                    </li>
                    <li>
                        <h5>03</h5>
                        <h3>Can be made separately</h3>
                        <p>
                        All technologies, including H/W, S/W, and AI, can be developed on their own and mass-produced separately as robots with functions and designs suitable for the needs of robot development. (Customized design, customization for each part, mass production of enclosures based on AHS)
                        </p>
                    </li>
                </ul>
                <ModuleWrap>
                    <ContainerWrap>
                        <div className="left-box">
                            <div>
                                <h2 className="montserrat">Module</h2>
                                <p>
                                Advance Solutions is a ROBOT solution company that makes realizable changes now with a different perspective.  
                            </p>
                            </div>
                            <div className="product-img">
                                <img src="/img/technology/product1.png"/>
                            </div>
                        </div>
                        <div className="module-img-wrap">
                            <img src="/img/technology/product2.png"/>
                        </div>
                    </ContainerWrap>
                </ModuleWrap>
            </ContainerWrap>
            <Divider />

            <TechnologySection1 id="sec1">
                <ContainerWrap>
                    <ul className="technology-title">
                        <li>
                            <h5>01</h5>
                            <h2>Enclosure Technology<strong className="montserrat"> AHS</strong></h2>
                            <img src="/img/technology/Arrow.svg" />
                        </li>
                        <li>
                            <p>
                            By using standardized components and a one-touch assembly method without molds, production costs are reduced, and manufacturing lead times are shortened.
                            The modular structure enables compatibility with various devices and customization based on customer requests.
                            By applying design elements, we were recognized as a K-Design Award Winner.
                            </p>
                        </li>
                    </ul>   
                    <div className="ahs-box-wrap">
                        <div className="ahs1 ahs-box">
                            <h3>Modular Structure</h3>
                            <p>Compatible with various devices through a modular structure. </p>
                        </div>
                        <div className="ahs-box-wrap2">
                            <div className="ahs2 ahs-box">
                                <h3>One-Touch Assembly<br/> Technology</h3>
                                <p>Improves production efficiency with<br/> one-touch assembly technology.</p>
                            </div>
                            <div className="ahs3 ahs-box">
                                <h3>Standardized Components</h3>
                                <p>Enables diverse product lineups<br/> using standardized components.</p>
                            </div>
                        </div>
                    </div>
                </ContainerWrap>         
                <div className="cost-wrap">
                    <ContainerWrap>
                        <h2 className="sub-title">Cost and Manufacturing Time</h2>
                        <p className="sub-title-detail">Reduces production costs and minimum order quantities while shortening lead times. </p>
                        <ul className="cost-box-wrap">
                            <li className="cost-box" id="cost1">
                                <h5>Minimum Order Quantity</h5>
                                <h3>Reduced by 97%</h3>
                            </li>
                            <li className="cost-box" id="cost2">
                                <h5>Price Competitiveness</h5>
                                <h3>80% cost reduction</h3>
                            </li>
                            <li className="cost-box" id="cost3">
                                <h5>Rapid Production</h5>
                                <h3>75% reduction</h3>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>
            </TechnologySection1>  

            <TechnologySection2 id="sec2">  
                <div className="technology-title-wrap">
                    <ContainerWrap>
                        <ul className="technology-title">
                            <li>
                                <h5>02</h5>
                                <h2>Robot Technology<strong className="montserrat"> ARS</strong></h2>
                                <img src="/img/technology/Arrow2.svg" />
                            </li>
                            <li>
                                <p>
                                Technology for contamination-oriented driving management that preemptively cleans contaminated areas.
                                Automated station technology that replaces filters and batteries without human intervention.
                                </p>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>    
                <div className="ars-wrap p-wrap">
                    <ContainerWrap>
                        <h2 className="sub-title">Contamination-Oriented<br/>Driving Technology</h2>
                        <ul className="ars-box-wrap">
                            <li>
                                <img src="/img/technology/ars1.png" />
                                <p>
                                Prioritizes cleaning highly contaminated areas efficiently through sensor integration.
                                </p>
                            </li>
                            <li>
                                <img src="/img/technology/ars2.png" />
                                <p>
                                Robot driving tests<br/> (space recognition rate, driving occupancy rate, obstacle avoidance rate)
                                </p>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>
                <Divider />
                <div className="ars-wrap2 p-wrap">

                    <ContainerWrap>
                        <h2 className="sub-title">Automated Station Technology </h2>   
                        <div className="ars-img-box p-wrap">
                            <div className="ars-text">
                                <h3>01  Automated Station Technology</h3>
                                <h1>
                                Automatic filter and<br/> battery replacement station.
                                </h1>
                            </div>
                            <div className="ars-img">
                                <img src="/img/technology/tech1.png"/>
                            </div>
                        </div>
                    </ContainerWrap>

                     <div className="ars-img-box background-img-box p-wrap">
                        <ContainerWrap>
                            <div className="ars-img-box">
                                <div className="ars-img">
                                    <img src="/img/technology/tech2.png"/>
                                </div>
                                <div className="ars-text">
                                    <h3>02  Automated Station Technology</h3>
                                    <h1>
                                    Robotic Arm Technology.
                                    </h1>
                                </div>
                            </div>
                        </ContainerWrap>
                     </div>

                     <ContainerWrap>
                        <div className="ars-img-box p-wrap">
                            <div className="ars-text">
                                <h3>03  Automated Station Technology</h3>
                                <h1>
                                Alignment technology using a guide.
                                </h1>
                            </div>
                            <div className="ars-img">
                                <img src="/img/technology/tech3.png"/>
                            </div>
                        </div>
                    </ContainerWrap>
                     
                    <div className="ars-img-box background-img-box p-wrap">
                        <ContainerWrap>
                            <div className="ars-img-box">
                                <div className="ars-img">
                                    <img src="/img/technology/tech4.png"/>
                                </div>
                                <div className="ars-text">
                                    <h3>04  Automated Station Technology</h3>
                                    <h1>
                                    Filter automatic replacement technology
                                    </h1>
                                </div>
                            </div>
                        </ContainerWrap>
                     </div>
                </div>
            </TechnologySection2>  

            <TechnologySection3 id="sec3">
                <ContainerWrap>
                    <ul className="technology-title">
                        <li>
                            <h5>03</h5>
                            <h2>Light Source Technology <strong className="montserrat"> ASS</strong></h2>
                            <img src="/img/technology/Arrow.svg" />
                        </li>
                        <li>
                            <p>
                            Sterilization light source with a special far-ultraviolet wavelength that is harmless to humans.
                            Retractable (open/close) ultraviolet light source ensures safety.
                            </p>
                        </li>
                    </ul>
                    <div className="a-link-list">
                        <div className="a-link">
                            <Link href="#tech1">Light Source Storage (Retractable) Technology</Link>
                        </div>
                        <div className="a-link">
                            <Link href="#tech2">Far-Ultraviolet vs Ultraviolet</Link>
                        </div>
                        <div className="a-link">
                            <Link href="#tech3">Academic Papers</Link>
                        </div>
                    </div>
                    <div className="tech-box-wrap" id="tech1">
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box1.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>Light Source Storage (Retractable) Technology</h2>
                            </div>
                        </div>
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box2.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>Light Source Irradiation Angle Adjustment Technology</h2>
                            </div>
                        </div>
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box3.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>Wavelength Range and Sterilization Power Testing</h2>
                            </div>
                        </div>
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box4.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>4-Strain Microbial Sterilization Testing </h2>
                            </div>
                        </div>
                    </div>
                </ContainerWrap>
                <div className="rays-wrap" id="tech2">
                    <div className="rays-banner">
                        <ContainerWrap>
                            <h2>Far-Ultraviolet vs Ultraviolet</h2>
                            <p>Uses Far-Ultraviolet (Far UV-C) light source, <br/>which is safe and harmless to the human body.</p>
                            <div className="rays-img-box-wrap">
                                <div className="rays-img-box">
                                    <img src="/img/technology/rays1.png"/>
                                </div>
                                <div className="rays-img-box">
                                    <img src="/img/technology/rays2.png"/>
                                </div>
                            </div>
                            <div className="rays-graph-wrap">
                                <h3>
                                Comparison between Ultraviolet<br/>  (UV-C)and Far-Ultraviolet<br/>  (Far UV-C)
                                </h3>
                                <div className="rays-graph">
                                    <img src="/img/technology/graph.png"/>
                                </div>
                            </div>
                        </ContainerWrap>
                    </div>
                </div>
                <div className="thesis-wrap" id="tech3">
                        <h2 className="sub-title">
                        Academic Papers
                        </h2>
                    <ContainerWrap>
                        <div className="thesis-title-wrap">
                            <div className="thesis-title">
                                <h4>Paper on Far Ultraviolet Stability Verification by Columbia University, USA.</h4>
                            </div>
                            <div className="thesis-img-wrap">
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis1.png"/>
                                </div>
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis2.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="thesis-title-wrap">
                            <div className="thesis-title">
                                <h4>Paper on Far-Ultraviolet Stability Verification through Animal Testing by Kobe University, Japan</h4>
                            </div>
                            <div className="thesis-img-wrap">
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis3.png"/>
                                </div>
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis4.png"/>
                                </div>
                            </div>
                        </div>
                    </ContainerWrap>
                </div>
            </TechnologySection3>
            <Footer />
        </TechnologyWrap>
    </ThemeProvider>
    </>
  )

}

const TechNavWrap = styled(Box)`
    position: relative;
    height: 150px;
    @media ${() => theme.device.mobile} {
        height: 130px;
    }
`;

const TechnologyWrap = styled(Box)`
        .sub-title{
            font-size: 3.5rem;
            font-weight: bold;
            color: ${()=> theme.colors.textColor};
            line-height: 150%;
            text-align: center;
        }
        .sub-title-detail{
            font-size: 2rem;
            font-weight: 400;
            color: ${()=> theme.colors.textColor2};
            line-height: 150%;
            text-align: center;
        }
        .p-wrap{
            padding: 10rem 0;
        }
    .technology-info-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10rem 0 0 0;
        li{
            padding: 5rem;
            border-radius: 24px;
            height: 38rem;
            width: 32%;
            background-color:  ${()=> theme.colors.backgroundColor};
            h5{
                font-size: 1.6rem;
                font-weight: bold;
                color: ${()=> theme.colors.primary};
                margin-bottom: 3rem;
            }
            h3{
                font-size: 2rem;
                font-weight: bold;
                color: ${()=> theme.colors.textColor};
                line-height: 150%;
                margin-bottom: 1rem;
            }
            p{
                font-size: 1.4rem;
                font-weight: 400;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
            }
        }
        li:nth-of-type(2){
            background-color: #fff;
            box-shadow: 0 0 20px rgba(211,206,255,.3);
            margin-bottom: 10rem;
        }
    }
    @media ${() => theme.device.tablet} {
        .sub-title{
            font-size: 3rem;
        }
        .sub-title-detail{
            font-size: 1.8rem;
        }
        .p-wrap{
            padding: 8rem 0;
        }
        .technology-info-box{
            margin: 8rem 0 0 0;
            li{
                padding: 3rem;
                height: auto;
                p{
                    font-size: 1.4rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }
    }
    @media ${() => theme.device.mobile} {
        .sub-title{
            font-size: 2.8rem;
        }
        .sub-title-detail{
            font-size: 1.6rem;
        }
        .p-wrap{
            padding: 5rem 0;
        }
        .technology-info-box{
            flex-direction: column;
            margin-top: 5rem;
            li{
                width: 100%;
                margin-bottom: 2rem;
                h5{
                    margin-bottom: 2rem;
                }
            }
            li:nth-of-type(2){
                margin-bottom: 2rem;
            }
            li:last-of-type{
                margin: 0;
            }
        }
    }
`;

const SubBannerWrap = styled(Box)`
    position: relative;
    /* margin-top: 100px; */
`;



const ModuleWrap = styled(Box)`
    padding-bottom: 5rem;
    &>div{
        display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .left-box{
        width: 40%;
        h2{
            font-size: 5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 1.8rem;
            line-height: 150%;
            color: ${()=> theme.colors.textColor2};
            font-weight: 400;
        }
        .product-img{
            margin-top: 8rem;
            width: 48%;
            img{
                width: 100%;
            }
        }
    }
    .module-img-wrap{
        width: 70%;
        img{
            width: 100%;
        }
    }
    @media ${() => theme.device.mobile} {
        padding-top: 5rem;
        &>div{
            flex-direction: column;
        }
        .left-box{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &>div{
                width: 70%;
            }
            h2{
                font-size: 3.5rem;
            }
            p{
                font-size: 1.6rem;
                br{
                    display: none;
                    line-break: anywhere;
                }
            }
            .product-img{
            margin-top: 0;
            width: 15%;
            img{
                width: 100%;
            }
        }
        }
        .module-img-wrap{
            width: 100%;
        }
    }
`;

const TechnologySection1 = styled(Box)`
  
    .technology-title{
        padding: 10rem 0 8rem 0;
        display: flex;
        align-items: flex-start;
        li{
            width: 50%;
            h5{
                font-size: 1.6rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
                font-weight: 500;
                margin-bottom: .5rem;
            }
            h2{
                font-size: 3.5rem;
                color: ${()=> theme.colors.textColor};
                font-weight: 600;
                strong{
                    font-size: 3.5rem;
                    color: ${()=> theme.colors.primary2};
                }
            }
            img{
                margin-top: 4rem;
            }
            p{
                font-size: 1.8rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 160%;
                font-weight: 400;
            }
        }
    }
    .ahs-box-wrap{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 10rem;
        .ahs-box{
            border-radius: 24px;
            padding: 5rem;
            background-position: center;
            background-size: cover;
            h3{
                font-size: 2.4rem;
                color: ${()=> theme.colors.textColor};
                line-height: 150%;
                font-weight: bold;
                margin-bottom: .5rem;
            }
            p{
                font-size: 1.6rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
                font-weight: 400;
            }
        }
        .ahs-box-wrap2{
            width: 63%;
        }
        .ahs1{
            width: 35%;
            height: 65rem;
            background-image: url(../img/technology/ahs1.png);
        }
        .ahs2{
            width: 100%;
            background-image: url(../img/technology/ahs2.png);
            height: 28rem;
            margin-bottom: 2rem;
        }
        .ahs3{
            width: 100%;
            background-image: url(../img/technology/ahs3.png);
            height: 35rem;
        }
    }
    .cost-wrap{
        background-color: ${()=> theme.colors.backgroundColor};
        padding: 10rem 0;
        .cost-box-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 8rem;
            .cost-box{
                padding: 4rem;
                border-radius: 24px;
                height: 420px;
                background-color: #fff;
                width: 32%;
                background-position: bottom;
                background-size: contain;
                background-repeat: no-repeat;
                box-shadow: 0 0 20px rgba(211,206,255,.3);
                h5{
                    font-size: 2rem;
                    font-weight: 500;
                    color: ${()=> theme.colors.textColor2};
                    line-height: 150%;
                }
                h3{
                    font-size: 3rem;
                    font-weight: bold;
                    line-height: 150%;
                    color: ${()=> theme.colors.primary};
                }
            }
            #cost1{
                background-image: url(../img/technology/cost1.png);
            }
            #cost2{
                background-image: url(../img/technology/cost2.png);
            }
            #cost3{
                background-image: url(../img/technology/cost3.png);
            }
        }
    }
    @media ${() => theme.device.tablet} {
        .technology-title{
            padding: 8rem 0 8rem 0;
            li{
                h2{
                    font-size: 3.5rem;
                    strong{
                        font-size: 3.5rem;
                    }
                }
                p{
                    font-size: 1.6rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }
        .ahs-box-wrap{
            padding-bottom: 8rem;
        }
        .cost-wrap{
            padding: 8rem 0;
            .cost-box-wrap{
                margin-top: 5rem;
            }
        }
    }
    @media ${() => theme.device.mobile2} {
        .technology-title{
            padding: 5rem 0 5rem 0;
            li{
                h2{
                    font-size: 2.5rem;
                    strong{
                        font-size: 2.5rem;
                    }
                }
                p{
                    font-size: 1.4rem;
                }
            }
        }
        .ahs-box-wrap{
            flex-direction: column;
            .ahs-box-wrap2{
                width: 100%;
            }
            .ahs1{
                width: 100%;
                height: 30rem;
                background-position : top;
            }
            .ahs-box{
                flex-direction: column;
                padding: 3rem;
            }
            .ahs2{
                width: 100%;
                margin-top: 2rem;
                height: 30rem;
                background-position : top;
            }
            .ahs3{
                height: 30rem;
                background-position : top;
            }
        }
        .cost-wrap{
            .cost-box-wrap{
                flex-direction: column;
                .cost-box{
                    width: 100%;
                    background-position : right;
                    height:20rem;
                    margin-bottom: 2rem;
                    padding: 3rem;
                    h3{
                        font-size: 2.8rem;
                    }
                    h5{
                        font-size: 1.8rem;
                    }
                }
                .cost-box:last-of-type{
                    margin: 0;
                }
            }
        }
    }
`;

const TechnologySection2 = styled(Box)`
    .technology-title-wrap{
        padding: 10rem 0 8rem 0;
        background-color: ${()=> theme.colors.primary};
    }
    .technology-title{
        display: flex;
        align-items: flex-start;
        li{
            width: 50%;
            h5{
                font-size: 1.6rem;
                color: #fff;
                line-height: 150%;
                font-weight: 500;
                margin-bottom: .5rem;
            }
            h2{
                font-size: 3.5rem;
                color: #fff;
                font-weight: 600;
                strong{
                    font-size: 3.5rem;
                    color: #fff;
                }
            }
            img{
                margin-top: 4rem;

            }
            p{
                font-size: 1.8rem;
                color: #fff;
                line-height: 160%;
                font-weight: 400;
            }
        }
    }
    .ars-wrap{
        .ars-box-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 5rem;
            li{
                width: 49%;
                p{
                    font-size: 1.8rem;
                    color:  ${()=> theme.colors.textColor2};
                    line-height: 150%;
                    font-weight: 400;
                    text-align: center;
                    margin-top: 2rem;
                }
                img{
                    width: 100%;
                }
            }
        }
    }
    .ars-img-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .ars-img{
            width: 49%;
            img{
                width: 100%;
            }
        }
        .ars-text{
            width: 35%;
            h3{
                font-size: 2rem;
                font-weight: bold;
                color:  ${()=> theme.colors.primary};
                line-height: 150%;
                margin-bottom: 1rem;
            }
            h1{
                font-size: 3.5rem;
                font-weight: bold;
                color:  ${()=> theme.colors.textColor};
                line-height: 150%;
            }
        }
    }
    .background-img-box{
        background-color:${()=> theme.colors.backgroundColor2};
    }
    @media ${() => theme.device.tablet} {
        .technology-title-wrap{
            padding: 8rem 0 8rem 0;
        }
        .technology-title{
            li{
                h2{
                    font-size: 3rem;
                    strong{
                        font-size: 3rem;
                    }
                }
                p{
                    font-size: 1.6rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }
        .ars-img-box{
            .ars-text{
                h1{
                    font-size: 2.8rem;
                }
                h3{
                    font-size: 1.4rem;
                }
            }
        }
    }
    @media ${() => theme.device.mobile2} {
        .technology-title-wrap{
            padding: 5rem 0 5rem 0;
        }
        .technology-title{
            li{
                h2{
                    font-size: 2.5rem;
                    strong{
                        font-size: 2.5rem;
                    }
                }
                p{
                    font-size: 1.4rem;
                }
            }
        }
        .ars-wrap{
            .ars-box-wrap{
                flex-direction: column;
                li{
                    width:100%;
                }
                li:first-of-type{
                    margin-bottom: 5rem;
                }
            }
        }
        .ars-img-box{
            flex-direction: column;
            .ars-text{
                width: 100%;
            }
            .ars-img{
                width : 100%;
                margin-top: 2rem;
            }
        }
        .background-img-box{
            .ars-img-box{

                flex-direction: column-reverse !important;
                .ars-img{
                    margin :2rem 0 0 0;
                }
            }
        }
    }
`;

const TechnologySection3 = styled(Box)`
     .technology-title{
        padding: 0 0 8rem 0;
        display: flex;
        align-items: flex-start;
        li{
            width: 50%;
            h5{
                font-size: 1.6rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
                font-weight: 500;
                margin-bottom: .5rem;
            }
            h2{
                font-size: 3.5rem;
                color: ${()=> theme.colors.textColor};
                font-weight: 600;
                strong{
                    font-size: 3.5rem;
                    color: ${()=> theme.colors.primary2};
                }
            }
            img{
                margin-top: 4rem;
            }
            p{
                font-size: 1.8rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 160%;
                font-weight: 400;
            }
        }
    }
    .a-link-list{
        display: flex;
        align-items: center;
        margin-bottom: 5rem;
        .a-link{
            width: 33.3%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${()=> theme.colors.backgroundColor2};
            transition: all .3s ease-in-out;
            a{
                padding: 2rem 1rem;
                display: inline-block;
                font-size: 1.4rem;
                color: #22282F;
                width: 100%;
                text-align: center;
            }
        }
        .a-link:first-of-type{
            border-bottom-left-radius: 8px;
            border-top-left-radius: 8px;
        }
        .a-link:last-of-type{
            border-bottom-right-radius: 8px;
            border-top-right-radius: 8px;
        }
        .a-link:hover{
            background-color: ${()=> theme.colors.primary};
            a{
                color: #fff;
                font-weight:bold;
            }
        }
    }
    .tech-box-wrap{
        display: flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap: wrap;

        .tech-box{
            width: 49%;
            margin-bottom: 2rem;
            transition: all .3s ease-in-out;
            
            .tech-box-img{
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;   
                overflow: hidden;
                position: relative;
            }
            img{
                width: 100%;
                transition: all 0.4s ease;
                backface-visibility: hidden; 
            }
            .tech-box-title{
                background-color: ${()=> theme.colors.backgroundColor2};
                border-bottom-left-radius: 16px;
                border-bottom-right-radius: 16px;   
                padding: 2rem 2rem;
                transition: all .3s ease-in-out;
                /* min-height: 80px;
                height: 80px; */
                h2{
                    font-size: 2rem;
                    color: ${()=> theme.colors.textColor};
                    font-weight: 500;
                    transition: all .3s ease-in-out;
                }
            }
        }
        .tech-box:hover{
            img{
                transform: scale(1.08);
            }
            .tech-box-title{
                background-color: ${()=> theme.colors.primary};
                h2{
                    color: #fff;
                }
            }
        }
    }
    .rays-wrap{
        margin: 10rem 0;
        .rays-banner{
            background-image: url(../img/technology/sub-banner.png);
            background-position: top;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 10rem 0;
            h2{
            font-size: 3.5rem;
            font-weight: bold;
            color:#fff;
            line-height: 150%;
            text-align: center;
            }
            p{
                font-size: 2rem;
                font-weight: 400;
                color: #fff;
                line-height: 150%;
                text-align: center;
            }
            .rays-img-box-wrap{
                margin: 8rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .rays-img-box{
                    width: 49%;
                    border-radius: 16px;
                    box-shadow: 0 0 20px rgba(211,206,255,.3);
                    background-color: #fff;
                    img{
                        width: 100%;
                    }
                }
            }
            .rays-graph-wrap{
                display: flex;
                align-items:flex-start;
                justify-content: space-between;
                h3{
                    font-size: 2.4rem;
                    color: ${()=> theme.colors.textColor};
                    font-weight: bold;
                    line-height: 150%;
                    width: 40%;
                }
                .rays-graph{
                    width: 60%;
                    img{
                        box-shadow: 0 0 20px rgba(0,0,0,.1);
                        width: 100%;
                    }
                }
            }
        }
    }
    .thesis-wrap{
        &>div{
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin: 5rem auto 10rem auto;
        }
        .thesis-title-wrap{
            width: 49%;
            .thesis-title{
                background-color:  ${()=> theme.colors.primary};
                padding: 1.5rem 3rem;
                border-radius: 16px;
                h4{
                    font-size: 1.8rem;
                    color: #fff;
                    font-weight: bold;
                    text-align: center;
                }
            }
            .thesis-img-wrap{
                display:flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 3rem;
                .thesis-img{
                    width: 49%;
                    border-radius: 16px;
                    border: 1px solid rgba(0,0,0,.1);
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media ${() => theme.device.tablet} {

        .technology-title{
            li{
                h2{
                    font-size: 3rem;
                    strong{
                        font-size: 3rem;
                    }
                }
                p{
                    font-size: 1.6rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }

        .a-link-list{
            margin-bottom: 3rem;
            .a-link{
                height: 80px;
                a{
                    font-size: 1.4rem;
                }
            }
        }
        .rays-wrap{
            margin: 8rem 0;
            .rays-banner{
                padding: 8rem 0;
                h2{
                    font-size: 2.8rem;
                }
                p{
                    font-size: 1.8rem;
                }
                .rays-graph-wrap{
                    h3{
                        font-size: 2rem;
                        br{
                            display: none;
                        }
                    }
                }
            }
        }

    }


    @media ${() => theme.device.mobile2} {

        .technology-title{
            padding-bottom: 5rem;
            li{
                h2{
                    font-size: 2.5rem;
                    strong{
                        font-size: 2.5rem;
                    }
                }
                p{
                    font-size: 1.4rem;
                }
            }
        }

        .tech-box-wrap{
            .tech-box{
                .tech-box-title{
                    h2{
                        font-size: 1.8rem;
                    }
                }
            }
        }
        .rays-wrap{
            margin: 3rem 0 5rem 0;
            .rays-banner{
                padding: 5rem 0;
                .rays-img-box-wrap{
                    margin: 5rem 0;
                }
                .rays-graph-wrap{
                    flex-direction: column;
                    h3{
                        width: 100%;
                        margin-bottom: 2rem;
                        br{
                            display: block;
                        }
                    }
                    .rays-graph{
                        width: 100%;
                    }
                }
            }
        }
        .thesis-wrap{
            &>div{
                flex-direction: column;
            }
            .thesis-title-wrap {
                width: 100%;
                .thesis-img-wrap{
                    margin-top: 2rem;
                }
            }
            .thesis-title-wrap:first-of-type{
                margin-bottom: 5rem;
            }
        }
    }
`;