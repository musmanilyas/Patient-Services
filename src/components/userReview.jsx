import React from 'react';
import StarRatings from 'react-star-ratings';
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






const useStyles = makeStyles(theme => ({
  card: {
  
  width:'90%',
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

    backgroundColor:'#7599b5',
    borderColor:'white',
    border:'groove',
    
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




const UserReview = ({data}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [reviews,changeReviews]=React.useState([]);



React.useEffect(()=>{






fetchReviews();

},[]);



async function fetchReviews(){

  const res=await auth.getProviderReviews(data._id);
  
  
  changeReviews(res.data.review);
    }
  
    return (
      <div>
        
      {(reviews !=null &&reviews.length == 0) && <div className="alert alert-primary" role="alert">
    {}
        This user have no reviews yet!!!!!!</div>}
 <Card className={classes.card}> 
  {reviews.map(e=>{ 
    return (<div key={e._id}>
    <CardHeader 
     className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
  {e.customerName}          
          </Avatar>
        }
        title={`${e.customerName}`}
  
    subheader={e.dateTime}
      />
     <StarRatings 
                starDimension='25px'
                ignoreInlineStyles={false}
          rating={e.stars}
          starRatedColor="red"
      
          numberOfStars={5}
          name='rating'
        />
      <CardContent>

<Typography paragraph component="p">
         {e.description}
        </Typography>
      </CardContent>



      </div> )})} 
        </Card></div>

)
}
 
export default UserReview;