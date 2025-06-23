import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import GoogleIcon from '@mui/icons-material/Google';

const drawerWidth = 200;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: '#181A20',
    color: '#fff',
    borderRight: 'none',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    // Custom seamless scrollbar
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#23242a #181A20',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  '& .MuiDrawer-paper::-webkit-scrollbar': {
    width: '8px',
    background: 'transparent',
  },
  '& .MuiDrawer-paper::-webkit-scrollbar-thumb': {
    background: '#23242a',
    borderRadius: 8,
  },
  '& .MuiDrawer-paper::-webkit-scrollbar-track': {
    background: 'transparent',
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 22,
  letterSpacing: 1,
  color: '#fff',
  marginBottom: theme.spacing(4),
  paddingLeft: theme.spacing(3),
  textAlign: 'left',
}));

const sectionTitle = {
  fontSize: 13,
  color: '#b3b3b3',
  fontWeight: 600,
  margin: '18px 0 6px 24px',
  letterSpacing: 1,
};

const iconSx = { color: '#b3b3b3', minWidth: 36 };

export default function SideBar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <LogoBox>Groovy</LogoBox>
      <div>
        <div style={sectionTitle}>MENU</div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><HomeOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><CategoryOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Genres" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><AlbumOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Albums" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><PersonOutlineOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Artists" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><RadioOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Radio" />
            </ListItemButton>
          </ListItem>
        </List>
        <div style={sectionTitle}>LIBRARY</div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><AccessTimeOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Recent" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><AlbumOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Albums" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><FavoriteBorderOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Favourites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><FolderOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Local" />
            </ListItemButton>
          </ListItem>
        </List>
        <div style={sectionTitle}>PLAYLIST</div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><AddCircleOutlineOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Create Now" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><StarBorderOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Design Flow" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><LibraryMusicOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Best of 2020" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={iconSx}><LibraryMusicOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Nigeria Jams" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ bgcolor: '#23242a', width: '80%', mx: 'auto', my: 2 }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ bgcolor: '#23242a', borderRadius: 2, mx: 2 }}>
              <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText primary="Google Homepod" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ px: 3, pt: 2, color: '#b3b3b3', fontSize: 13 }}>
          Playing on Device
        </Box>
        </div>
        </Drawer>   
        );
        }
