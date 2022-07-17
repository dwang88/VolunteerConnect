import React from 'react';
import { Card as MuiCard, Button, Typography, CardMedia, CardContent, Box} from '@mui/material';
import { AttachMoney, Computer, Accessibility, Android } from '@mui/icons-material';
import { Link } from 'react';
import '../components/Card.css';

export default function Card({component, height, image, alt, title, body, button, icons, buttonlink, tags=['paid', 'online', 'hourly', 'inperson', 'stem']}) { 
  return (
    <MuiCard className="card" style={{ border: "none", display: 'flex'}}>
        <CardMedia 
        component={component}
        height={height}
        image={image}
        alt={alt}
        className="image">
        </CardMedia>
        
      <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: "0 0.0625rem 0.1875rem 0 var(--shadow-with-opacity)" }}>
        <CardContent className="content">
          <Box className="title">
          <Typography variant='h5'>{title}</Typography>
          </Box>
          <Box className="bodyText">
          <Typography variant='body2'>{body}</Typography>
          </Box>
        </CardContent>
          <Box className='button'>
          <Button variant="contained" sx={{textTransform: 'none'}} href={ buttonlink } target="_blank">{button}</Button>
          </Box>
          <Box className='icons'>
          <ul className='iconsList'>
            {tags.includes("paid") && <><AttachMoney className='icon' sx={{ marginRight: '-10px'}} /><h5>Paid</h5></>}
            {tags.includes("inperson") && <><Accessibility className='icon' sx={{ marginRight: '-5px'}} /><h5>In-Person</h5></>}
            {tags.includes("online") && <><Computer className='icon' sx={{ marginRight: '-5px'}} /><h5>Online</h5></>}
            {tags.includes("stem") && <><Android className='icon' sx={{ marginRight: '-5px'}} /><h5>STEM</h5></>}
          </ul>
          </Box>

      </Box>
    </MuiCard>
    )
}

//            <li><AttachMoney className='icon'/><h5>Paid</h5></li>
//<li><AccessTime className='icon'/><h5>Hourly</h5></li>
//<li><Computer className='icon'/><h5>Online</h5></li>