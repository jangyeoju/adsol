import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Close from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import theme from '../../style/theme';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [listOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!listOpen);
  };

  const [listOpen2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(!listOpen2);
  };

  const [listOpen3, setOpen3] = React.useState(false);

  const handleClick3 = () => {
    setOpen3(!listOpen3);
  };

  const list = (anchor) => (
    <StyledList component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Advance Solution" />
        {listOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/vision">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="Vision" />
            </StyledListItemButton>
          </Link>
          <Link href="/now">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="Now" />
            </StyledListItemButton>
          </Link>
          <Link href="/contact">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="Contact Us" />
            </StyledListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick2}>
        <ListItemText primary="Technology and Products" />
        {listOpen2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listOpen2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/technology">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="Enclosure Technology (AHS)" />
            </StyledListItemButton>
          </Link>
          <Link href="/technology#sec2">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="Robot technology (ARS)" />
            </StyledListItemButton>
          </Link>
          <Link href="/technology#sec3">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="Light Source Technology (ASS)" />
            </StyledListItemButton>
          </Link>
          <Link href="/clibo">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="CLIBO" />
            </StyledListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemText primary="News and data" />
        {listOpen3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listOpen3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/news">
            <StyledListItemButton sx={{ pl: 2 }}>
              <ListItemText primary="News & data" />
            </StyledListItemButton>
          </Link>
        </List>
      </Collapse>
    </StyledList>
  );

  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
    palette: {
      primary: {
        main: '#0457B2',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuBtn onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </MenuBtn>
            <StyledSwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <div className="close-btn">
                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <Close />
                </IconButton>
              </div>
              {list(anchor)}
            </StyledSwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
}

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: ${() => theme.colors.secondary};
    width: 50%;
    .close-btn {
      padding: 1rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      button {
        svg {
          color: #fff;
        }
      }
    }
  }
`;

const MenuBtn = styled(IconButton)`
  svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledList = styled(Box)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: ${() => theme.colors.secondary};
  span {
    font-size: 1.4rem;
    color: #fff;
    font-weight: 400;
    margin: 0;
  }
  svg {
    color: #fff;
  }
  /* &:hover{
        background-color: ${() => theme.colors.primary};
        h1{
            color: #fff;
        }
    } */
  @media ${() => theme.device.tablet} {
    h1 {
      font-size: 1.4rem;
    }
  }
`;

const StyledListItemButton = styled(ListItemButton)`
  background-color: #252559;
`;
