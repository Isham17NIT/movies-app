import * as React from 'react';
import { Card, CardActions,CardContent,CardMedia,Button,Typography }from '@mui/material';
import {Link} from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../slices/movieSlice';

export default function MovieCard(props) {

  const dispatch = useDispatch();
  const { primaryImage, primaryTitle, averageRating, trailer, description, runtimeMinutes } = props.movie

  const favorites = useSelector(state=>state.movies.favorites)

  return (
    <Card sx={{ width: 345, height: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        sx={{
          height: 220,
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'top'
        }}
        image={primaryImage}
        title={primaryTitle}
      />
      <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Typography gutterBottom variant="h5" component="div">
          {primaryTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            // minHeight: 72,
            maxHeight: 75,
          }}
        >
          {description}
        </Typography>
      </CardContent>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem',
            paddingRight: '0.15rem',
            paddingLeft: '0.1rem',
            flexWrap: 'wrap',  // Optional if mobile responsiveness needed
            gap: '12px'        // Add spacing between icons
            }}>
            <IconButton aria-label="add to favorites"
                onClick={()=>dispatch(toggleFavorites(props.movie))}
            >
              <FavoriteIcon color={favorites.find(m=>m.id===props.movie.id) ? "error" : "action"} />
            </IconButton>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <StarIcon fontSize="small" style={{ color: '#1976d2' }} />
                <span>{averageRating}/10</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <AccessTimeIcon fontSize="small" style={{ color: '#1976d2' }} />
                <span>{runtimeMinutes} min</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                <PlayCircleIcon fontSize="small" style={{ color: '#1976d2' }} />
                <Link to={trailer} style={{ color: '#1976d2', textDecoration: 'none' }}>Watch Trailer</Link>
            </div>
        </div>
    </Card>
  );
}
