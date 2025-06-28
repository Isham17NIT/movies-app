import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar,Box,Toolbar,Typography,InputBase,Badge,IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import {LightMode,DarkMode } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { toggleTheme } from '../slices/darkModeSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavbarFavorites() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDark = useSelector((state)=>state.theme.isDark)
    const favorites = useSelector((state)=>state.movies.favorites)

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar sx={{ minHeight: 80 }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    My Favorites
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{display:'flex', gap:1, alignContent:'center'}}>
                  <div onClick={()=>dispatch(toggleTheme())}>
                    {
                      isDark ? <DarkMode className="mt-2"/> : <LightMode className="mt-2"/>
                    }
                  </div>
                  <div onClick={() => navigate('/')}>
                        <IconButton color="inherit">
                            <ArrowBackIosNewIcon style={{ color: "#fff" }} />
                        </IconButton>
                  </div>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  );
}