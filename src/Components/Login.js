import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Login.css'
import instaImg from '../assets/Instagram.JPG'
import {Link,useHistory} from  'react-router-dom';

import bg from '../assets/insta.png'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';




export default function Login() {
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        text2:{
            textAlign:'center'
        },
        card2:{
            height:'7vh',
            marginTop:'3px'
        }
    })
    const classes = useStyles();

    return (
        <div className='loginWrapper'>
            <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
              <div className="car">
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={5}
                    // step={3}
                    naturalSlideWidth={238}
                    naturalSlideHeight={423}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                >
                    <Slider>
                    <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
                    </Slider>
                </CarouselProvider>
              </div>
          </div>
            
            <div className='loginCard'>
                <Card varient="outlined">
                        
                        <div className='insta-img'>
                            <img src={instaImg} alt='instaImage'/>
                        </div>
                        <CardContent>
                            
                            {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <Typography color="primary" className={classes.text1} variant="subtitle1">
                                Forget Password ?
                            </Typography>
                        </CardContent>
                    
                        <CardActions>
                            <Button color="primary" fullWidth={true} variant="contained"  > 
                                Login
                            </Button>
                        </CardActions>
                        
                </Card>
                <Card variant="outlined" className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Don't have an account ?  <Link to="/signup" style={{textDecoration:'none'}}>Sign Up</Link>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
