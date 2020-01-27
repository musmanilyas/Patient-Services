

import React from 'react';
import ShowMoreText from 'react-show-more-text';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import user from './images/dsc.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import  FullWidthTabs from './userProfileMenu';
import auth from '../services/auth';
import emptyUser from './images/user.png';
import AggregateRating from './aggregateRating';
import SimpleTabs from './userProfileExtraMenu';
import { Route, Link } from 'react-router-dom';
import BookingReq from './bookingReq';
    const useStyles = makeStyles(theme => ({
       
        divider:{

       
          width:'100%'
        },
        media: {
            marginTop:'40px',
            width:'55%',
            marginLeft:'25%',
          height: '5%',
borderRadius:'20%',
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
  root: {
    display: 'flex',
height:'200%',
backgroundColor:'white',
marginBottom:'25px',
marginLeft:'60px',
[theme.breakpoints.up('md')]: {
  width: '95%',
},
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      backgroundColor:'white'
    },
  },
button:{
marginTop:'0%',
marginBottom:'0%',
marginRight:'5%',
marginLeft:'5%',
},
span:{
marginRight:'20px',
  marginLeft:'80px',
},
  paper1:{
      height:'120%',
      width:'30%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height:'20%' ,    },
        
  },

  
  paper3:{
 
    height:'120%',
    width:'60%',
    display:'block',
    [theme.breakpoints.down('sm')]: {
      width: '0%',
      height:'0%' ,  
    display:'none'  },

  },  



  paper4:{
    
    height:'0%',
    width:'0%',
   display:'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
   display:'flex',
  
     },

  }, 
}));



const UserProfile = (props) => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(true);
    const [data,changeData]=React.useState({});
const [booking,setBooking]=React.useState([]);
const [review,changeReview]=React.useState([]);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };




    React.useEffect(()=>{


fetchData();


    },[]);
async function fetchData(){
var res;
var pic;
const get=props.match.params.id;
if(get){
  res=await auth.getProfileData(props.match.params.id);
  pic =await auth.getUserProfilePicOtherUser(props.match.params.id);
  
  if(pic){
    changeImg(pic);
  }
  else changeImg(emptyUser)
}
else
{
   res=await auth.getProfileData(auth.getCurrentUser()._id);
   pic =await auth.getUserProfilePic();
   if(pic){
    changeImg(pic);
  }
  else changeImg(emptyUser)

}
const dataa=res.data;
changeData(dataa);
setBooking(dataa.booking);


  changeReview(dataa.review)
  
console.log('res',review);

}


const [img,changeImg]=React.useState(null);
    return (

<div className='col-12' style={{width:'100%',backgroundColor:'white'}}>
        <div className={classes.root} >
          
        <Paper className={classes.paper1} elevation={3} variant='subtitle1'>
      
      {console.log(img)}
      {img ==null &&
      <CardMedia
     
        className={classes.media}
        image='./images/user.png'
    
        title="profile Pic"
      />
      }{img !=null &&
        <CardMedia
       
          className={classes.media}
          image={img}
      
          title="profile Pic"
        />
        }
        <Typography className='mt-2' variant="h6" color="textPrimary" component="p">
            {data.firstname}
        </Typography>
        
        <Typography className='mt-2' paragraph color="textSecondary" component="p">

        {(review.length!=0) && <AggregateRating rev={review}></AggregateRating>}<br/> 
            ({`${booking.length} BookingReqs`})<br/>({`${review.length} Reviews`})        </Typography>
      
      {(auth.getCurrentUser() == null || auth.getCurrentUser().customer)&&<div className='col-12 container row ml-auto mr-2 mb-4'>
        <div className='col-6'>
      <a href={`/inbox${data._id}`}> <Button  variant="contained" color="primary">
        Contact
</Button></a> </div>
<div className='col-6 ' >
<BookingReq  activeUser={data.firstname} /></div>
{/* <Button variant="contained" className={classes.button} color="primary">
 Booking Req

</Button>*/}
</div>} 
<Divider  className={classes.divider}  />

<br/><br/>
      <Typography  variant='h6'  color="textSecondary" align='left' className={classes.span} component="p">
    <LocationOnIcon/> From <span  style={{fontFamily: 'cursive',fontSize:'20px'}} className='col-4 ml-4 text-dark'> {data.cities}</span>
        </Typography>
        <br/>
        <Typography variant='h6' color="textSecondary" fontStyle="italic" align='left'className={classes.span}  component="p">
        <CallMissedOutgoingIcon/>  Level <span style={{fontFamily: 'cursive',fontSize:'20px'}}className='col-12 ml-4 text-dark'>{data.experience}</span>
        </Typography>
        <br/>
        <Typography variant='h6' color="textSecondary" align='left'className={classes.span}  component="p">
    <PersonIcon/>  Gender <span style={{fontFamily: 'cursive' ,fontSize:'20px'}}className='col-4 ml-2 text-dark'>{data.gender}</span>
        </Typography>
<br/>
        <Typography variant='h6' color="textSecondary" align='left'className={classes.span}  component="p">
        <SupervisorAccountIcon/>  Member <span style={{fontFamily: 'cursive',fontSize:'20px'}} className='col-4 text-dark'>No</span>
        </Typography>
        <br/><br/>
 
 
        <Divider  className={classes.divider}  />
        <br/><br/>

        <Typography variant='h6' color="textSecondary" align='left'className={classes.span}  component="p">
        <BorderColorIcon/>  Description
        </Typography><br/>

        <ShowMoreText>
        <Typography  paragraph color="textPrimary" align='left'className={classes.span}  component="p">
      {data.description}
      </Typography>
      </ShowMoreText>
 
        </Paper>
        
       <Paper  className={classes.paper3}><FullWidthTabs data={data} /></Paper> 

 

        
      </div><Paper className={classes.paper4}><FullWidthTabs data={data}  /></Paper> </div>
      );
}
 
export default UserProfile;