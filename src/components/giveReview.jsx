import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import auth from '../services/auth';
import StarRatings from 'react-star-ratings';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    textField1: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    
    textField2: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
}));

const GiveReview = ({accept,provName ,bookingId, pId}) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [reviewDesc, changereviewDesc] = React.useState('');
    const [stars, changeStars] = React.useState(1);
    
    const handleClickOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {

        handleClickOpen();

    }
    const handleSubmit = async () => {
if(reviewDesc!=''){
const reviews={};
reviews.name=auth.getCurrentUser().firstname;
reviews.provName=provName;
reviews.reviewDesc=reviewDesc;
reviews.stars=stars;
reviews._id=auth.getCurrentUser()._id;
reviews.pId=pId;
reviews.bookingId=bookingId;
const res =await auth.giveReview(reviews);
console.log(res);
if (res.status==200){
    toast.success('Review Submitted!!');
    setOpen(false);
    window.location.reload(true);
    window.scrollBy(0,0);
}
else{
toast.warn('Not submitted try again');
setOpen(false);}
}


    };

   const  changeRating=( newRating, name ) =>{
        changeStars(newRating);
    }
    return (
        <div>
            {(accept  && auth.getCurrentUser().customer) && <Button className='ml-2' variant="contained" style={{backgroundColor:'#3FCA89'}} onClick={handleClickOpen}>
                Give Review
      </Button>}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Give Review to {provName}</DialogTitle>
<div style={{paddingLeft:'5%'}}>
                <StarRatings 
                starDimension='40px'
                ignoreInlineStyles={false}
          rating={stars}
          starRatedColor="red"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
        />
        </div>


                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        
                        <br/>
                        <TextField  className={classes.textField2}type="text" id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="3" inputProps={{ min: "1", max: "3", step: "2" , maxLength: 150, }} aria-required="false"label="Review" placeholder="write 100-150 characters" onChange={e => { changereviewDesc(e.target.value) }} value={reviewDesc} />


                    </form>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleSubmit} variant="contained" color="primary" autoFocus>
                        Done
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default GiveReview;