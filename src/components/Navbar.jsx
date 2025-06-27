import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar,Box,Toolbar,Typography,InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SelectorComponent from './SelectorComponent';

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

export default function Navbar() {
    const [genre, setGenre] = React.useState('');
    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const [rating, setRating] = React.useState('');
    const handleRating = (e) => {
        setRating(e.target.value);
    };

    const genreItems = ['Comedy','Action','Horror','Drama','Romance','Fantasy','Sci-Fiction','Mystery','Adventure'];
    const ratingItems = [1,2,3,4,5]

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Movies App
                </Typography>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{display:'flex', gap:2}}>
                  <SelectorComponent handleChange={handleGenre} text="Genre" title="genre" menuItems={genreItems}/>
                  <SelectorComponent handleChange={handleRating} text="Rating" title="rating" menuItems={ratingItems}/>
                </Box>
                
            </Toolbar>
        </AppBar>
    </Box>
  );
}