import Card from '../components/Card';
import '../home.css';
import { Card as MuiCard, Button, Typography, CardMedia, CardContent, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForwardIos, LocalAtm, PeopleAlt, TrendingUp, Build } from '@mui/icons-material';

export default function Home() {
    return(
        <div className='columns'>
            <div className='one'>
                <Box>
                <h2>All your local and online opportunites in one place</h2>
                <Button sx={{textTransform: 'none', marginLeft: "5rem", marginTop: "3rem", height: "3.5rem"}} className="start" variant="contained" endIcon={<ArrowForwardIos />} component={Link} to="/signUp">Get Started</Button>
                </Box>
            </div>
            <div className='two'>
                <MuiCard className='homecard' id="money">Get Paid
                <CardMedia>
                    <LocalAtm className='homeicon'/>
                </CardMedia>
                </MuiCard>
                <MuiCard className='homecard' id="skills">Develop Skills
                <CardMedia>
                    <Build className='homeicon'/>
                    </CardMedia>
                </MuiCard>
                <MuiCard className='homecard' id="build">Build Connections
                <CardMedia>
                    <PeopleAlt className='homeicon'/>
                    </CardMedia>
                </MuiCard>
                <MuiCard className='homecard' id="xp">Gain Experience
                <CardMedia>
                    <TrendingUp className='homeicon'/>
                </CardMedia>
                </MuiCard>
            </div>
        </div>
    )
}