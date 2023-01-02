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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './Signup.css'
import instaImg from '../assets/Instagram.JPG'
import {Link,useHistory} from  'react-router-dom';




export default function Signup() {
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        card2:{
            height:'7vh',
            marginTop:'3px'
        }
    })
    const classes = useStyles();

    return (
        <div className='signupWrapper'>
            <div className='signupCard'>
                <Card varient="outlined">
                        
                        <div className='insta-img'>
                            <img src={instaImg} alt='instaImage'/>
                        </div>
                        <CardContent>
                            <Typography className={classes.text1} variant="subtitle1">
                                Signup to see photos and videos from friends
                            </Typography>
                            {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                            <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon />} component="label">
                             Upload Profile Image
                            <input type="file" accept="image/*" hidden />
                            </Button>
                        </CardContent>
                    
                        <CardActions>
                            <Button color="primary" fullWidth={true} variant="contained"  > 
                                Sign up
                            </Button>
                        </CardActions>
                        <CardContent>
                            <Typography className={classes.text1} variant="subtitle1" fontSize=''>
                                By signing up, you agree to our Terms, Conditions and Cookies policy.
                            </Typography>
                        </CardContent>
                </Card>
                <Card variant="outlined" className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Having an account ? <Link to="/" style={{textDecoration:'none'}}>Login</Link>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
