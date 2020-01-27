import React from 'react';
import GiveReview from './giveReview';
import { makeStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';


import auth from '../services/auth';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  card: {
  marginLeft:'32%',
  width:'45%',
  
    marginTop:'30px',
    marginBottom:'30px',
    backgroundColor:'white'
 
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cardHeader:{

    backgroundColor:'#1976D2'
  },
  Dec:{

    marginLeft:'15px'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#e1d5ec',
  },
}));

export default function BookingReqUser() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


var data={};













React.useEffect(()=>{



fetchBookings();







}, []);

const handleDelete=async e=>{

  const book=bookings.filter(m=>m._id!=e);
  setBookings(book);
  

await auth.bookingDecline(e);



}



async function getProPic(id) {
    const pic =await auth.getUserProfilePicOtherUser(id);
    if(pic){
    changeImg(pic);
    
        return img;
      }
      else 
    {
      changeImg(null);
    
      return img;
    }
    }

async function fetchBookings(){

  const res=await auth.getUserBookings();
   data=res.data;
   console.log(data);
setBookings(data.booking);

  }



const [bookings,setBookings]=React.useState([])

const [img,changeImg]=React.useState(null)
    


console.log(bookings);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
return (
  <div style={{backgroundColor:'white'}}>
 {(bookings !=null && bookings.length == 0) && <div className="alert alert-primary" role="alert">
    {}
        You have no Bookings yet!!!!!!</div>}
    <Card className={classes.card}> 
  {bookings.map(e=>{ 
    
    return (<div key={e._id}>
    <CardHeader 
     className={classes.cardHeader}
      avatar={
          <Avatar aria-label="pic" className={classes.avatar} src={img}>
  {e.providerName}          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>{handleDelete(e._id)}}>
           <CancelIcon />
          </IconButton>
        }
        
        title={
            
            <Link style={{color:'black'}} to={`/profile-user/${e.booking_providerId}`}>
            {e.providerName}</Link>}
  
    subheader={e.dateTime}
      />
    
      <CardContent>
<Typography paragraph component="p">
         {e.description}
        </Typography>

        <Typography align='left' color='textPrimary' component="h2"><i className="fa fa-money" />
        &nbsp;Price:<span color='textSecondary'>{e.price}</span>
        </Typography><Typography align='right' color='textPrimary' component="h2">
        <i className="fa fa-clock-o" />&nbsp;Hours:<span color='textSecondary'>{e.noOfHours}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
      {(e.accepted==false)&&<h5 className='text-info'>Req Pending</h5>}
      {(e.accepted &&  e.reviewGiven==false)&&<h5 className='text-success'>Req Accepted</h5>}


   
      <br></br>
      {(e.accepted && e.reviewGiven==false) &&<GiveReview className="text-left" accept={e.accepted} provName={e.providerName} bookingId={e._id} pId={e.booking_providerId}></GiveReview>}
<br/>
{(e.reviewGiven) && <h5 className='text-success'>Review Given for this booking</h5>}



        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse key={e._id} in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph>
            You can give review after your request is accepted.
          </Typography>
          <Typography paragraph>
            Positive Reviews will help in increase of Caregivers level. 
          </Typography>
          
          <Typography paragraph>
          Note: 
          </Typography>
          
          <Typography paragraph>
          Try to give acurate reviews according to the experience you had from Caregiver.
          </Typography>
        </CardContent>
      </Collapse>

      </div> )})} 
  </Card>
  </div>
  );
}
