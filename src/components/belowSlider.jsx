
import React from 'react';

import "./belowslider.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import disabled from "./images/disabled-care.jpg";
import physio from "./images/physio.jpg";
import oldcare from "./images/oldcare.jpg";
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
    card: {
      
        
        marginBottom:'4%',
   
      marginTop:'4%'
    },
    media: {
      height: 140,
    },
  });
  
  export default function BelowSLider () {
    const classes = useStyles();
  const [services,changeServices]=React.useState([  "OldCare","StrokePatient","Physiotherapy","Other"])

  return (
        <React.Fragment>
             <h3
        style={{
            fontFamily: "cursive, sans-serif",fontSize:'30px',
          backgroundColor:'#D4EDDA',
          color:'#4D5155',
          marginTop: "2rem",
    
        }}
      >
      SERVICES
      </h3>
    <div  className='row col-12 container' style={{backgroundColor:'white'}}>
       
      <Box className='col-sm-4 '>
       <Card className={classes.card}>
        <CardActionArea>
        <Link to={`/services/${services[0]}`} className='hov'>
          <CardMedia
            className={classes.media}
            image={oldcare}
            title="old Care"
          />
          <CardContent className='col-sm-12'>
          
            <Typography  variant="h5" component="h2" color='textPrimary'>
            OldCare
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
  Our qualified staff will provide caregiving that can be challenging when it comes to psychological and physical well-being of our elders.
            
            </Typography>
            </CardContent>
            </Link>
         
        </CardActionArea>

  </Card>
  </Box>
  <Box className='col-sm-4'>
  <Card className={classes.card}>
        <CardActionArea>
        <Link to={`/services/${services[2]}`} className='hov'>
          <CardMedia
            className={classes.media}
            image={physio}
            title="old Care"
          />
          <CardContent className='col-sm-12'>
          
            <Typography  variant="h5" component="h2" color='textPrimary'>
            Physiotherapy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Physiotherapy is an important part of treatment.Our healthcare providers who help you to resume an active and independent life both at home and work.
            
            </Typography>
            </CardContent>
            </Link>
        
        </CardActionArea>
        
  </Card>
  </Box>  

  <Box className='col-sm-4'>
       <Card className={classes.card}>
        <CardActionArea>
        <Link to={`/services/${services[1]}`} className='hov'>
          <CardMedia
            className={classes.media}
            image={disabled}
            title="Stroke Patient"
          />
          <CardContent className='col-sm-12'>
         
            <Typography  variant="h5" component="h2" color='textPrimary'>
            Stroke Patient
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Medical caregivers provide best care whether it is an acquiredcondition after stroke, for example, a spinal cord or braininjury, a serious physical injury.
            
            </Typography>
            </CardContent>
            </Link>
         
        </CardActionArea>

  </Card>
  </Box>


      </div>
      </React.Fragment>
    );
  }



