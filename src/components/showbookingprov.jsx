import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import style from 'material-ui/svg-icons/image/style';

import { css } from 'glamor';

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



const useStyles = makeStyles(theme => ({
  card: {
  marginLeft:'32%',
  backgroundColor:'white',
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

export default function BookingReq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


var data={};
var  filter={};
const handleAccept=async e=>{
  console.log('e',e);
const book=bookings.filter(m=>m._id!=e);
 filter=bookings.filter(m=>m._id==e);
filter[0].accepted=true;

console.log(filter);
if(book.length!=0){

setBookings(book);
console.log('booking',bookings);
setBookings([...filter,...book]);
const result=await auth.bookingAccept(e);
if(result.status==200 && auth.getCurrentUser() && auth.getCurrentUser()._id==filter[0].booking_custId)

{
  toast.success(`${filter[0].providerName.toUpperCase()} Accepted your booking req`, {
        position: toast.POSITION.TOP_CENTER, className: css({
            background: "#E0E0E0",color:'black',borderRadius:'25px'
        })});


}}
else {setBookings(filter);
await auth.bookingAccept(e);

if(auth.getCurrentUser() && auth.getCurrentUser()._id==filter[0].booking_custId)

{
  toast.success(`${filter[0].providerName.toUpperCase()} Accepted your booking req`, {
        position: toast.POSITION.TOP_CENTER, className: css({
            background: "#E0E0E0",color:'black',borderRadius:'25px'
        })});
}
}
}
React.useEffect(()=>{



fetchBookings();




}, []);

const handleDelete=async e=>{

  const book=bookings.filter(m=>m._id!=e);
  setBookings(book);
  

await auth.bookingDecline(e);



}





async function fetchBookings(){

  const res=await auth.getProvBookings();
   data=res.data;
   console.log(data);
setBookings(data.booking);

  }



const [bookings,setBookings]=React.useState([])


console.log(bookings);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
return (
  <div style={{backgroundColor:'white'}}>
  
    <Card className={classes.card} > 
  {bookings.map(e=>{ 
    return (<div key={e._id}>
    <CardHeader 
     className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
  {e.customerName}          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>{handleDelete(e._id)}}>
           <CancelIcon />
          </IconButton>
        }
        title={`${e.customerName}`}
  
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
      
      {(e.accepted==false)?(<div>
      <Button variant="contained" className={classes.Dec}  color="primary" onClick={()=>handleAccept(e._id)}
        
        >
        Accept      </Button>
      
      <Button className={classes.Dec} variant="contained" color="secondary" onClick={()=>handleDelete(e._id)}>
        Decline
      </Button></div>):<h5 className='text-success'>Req Accepted</h5>}
      
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph>
            Accepting Booking request will allow you to get review from the sender.
          </Typography>
          <Typography paragraph>
            Positive Reviews will help you increase your Caregivers level 
          </Typography>
          
          <Typography paragraph>
          Note: 
          </Typography>
          
          <Typography paragraph>
          No of hours mentioned are less than 24 hence the booking req is of one day only.
          </Typography>
        </CardContent>
      </Collapse>

      </div> )})} 
  </Card></div>
  );
}
