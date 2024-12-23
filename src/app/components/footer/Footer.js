import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';

import theme from '../../../app/style/theme';
import ContainerWrap from '../layout/ContainerWrap';

export default function Footer({ select }) {
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
      <FooterWrap>
        <ContainerWrap>
          <div className="footer-wrap">
            <div className="logo-box">
              <img src="/img/logo_w.svg" />
            </div>
            <div className="footer-info">
              <p>
                Headquarters: 527, Startup Incubation Center, 55
                Hanyangdaehak-ro, Sangnok-gu, Ansan-si,
                <br /> Gyeonggi-do, South Korea (Sadong) <br />
                Branch Office: 1303, Shinil IT Uto Knowledge Industrial Center,
                13 LS-ro,
                <br /> Dangjeong-dong, Gunpo-si, Gyeonggi-do, South Korea
                <br />
                Corporate R&D Center: 780, Pangyo Startup Zone, Business Support
                Hub, 815 Daewangpangyo-ro,
                <br /> Sujeong-gu, Seongnam-si, Gyeonggi-do, South Korea
                <br />
                Tel : 070.8887.0625 / E-mail : adsol@adsol.kr
              </p>
              <h5>© ADVANCE SOLUTION CO. LTD 2025</h5>
            </div>
          </div>
        </ContainerWrap>
      </FooterWrap>
    </>
  );
}

const FooterWrap = styled(Box)`
  background-color: ${() => theme.colors.secondary};
  padding: 8rem 0;
  .footer-wrap {
    display: flex;
    align-items: flex-start;
    .logo-box {
      margin-right: 10rem;
      img {
        width: 180px;
      }
    }
    .footer-info {
      p {
        font-size: 1.4rem;
        color: #d1d1d9;
        font-weight: 300;
        line-height: 180%;
        margin-bottom: 3rem;
      }
      h5 {
        font-size: 1.4rem;
        color: #fff;
        font-weight: 600;
      }
    }
  }
  @media ${() => theme.device.tablet} {
    padding: 5rem 0;
    .footer-wrap {
      flex-direction: column;
      align-items: flex-start;
      .logo-box {
        margin-bottom: 3rem;
      }
    }
  }
`;
