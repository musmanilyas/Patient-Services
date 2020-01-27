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
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker, KeyboardDateTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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

const BookingReq = ({ activeUser }) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [priceValue, changepriceValue] = React.useState('');
    const [hoursValue, changeHoursValue] = React.useState('');
    const [dateValue, changeDateValue] = React.useState('02:30');
    const [descVal,changeDescValue]=React.useState('');

    const handleClickOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {

        handleClickOpen();

    }
    const handleSubmit = async () => {
        if ((priceValue == '' || priceValue <= 0) || (hoursValue == '' || hoursValue <= 0 || hoursValue > 24) || descVal=='' || dateValue =='') {
            if (hoursValue <= 0 || hoursValue > 24 || hoursValue == '') {
                if (priceValue <= 0) {
                    toast.info('Enter Valid price Value ')
                }
                else toast.info('Value of hours should be b/w 1-24 ')
            }
            else if (priceValue <= 0) {
                toast.info('Enter Valid price Value ')
            } else toast.info("Don't leave fields empty ");
        }

        else if (hoursValue == '' || hoursValue <= 0 || hoursValue > 24) { toast.info('Value of hours should be b/w 1-24 ') }
        else {
            handleClickOpen();
            const res = await auth.sendBookingReq({ activeUser: activeUser, booking_custId: auth.getCurrentUser()._id, price: priceValue, dateTime: dateValue, noOfHours: hoursValue ,customerName:auth.getCurrentUser().firstname,
                providerName:activeUser,
                description:descVal,
              });
            if (res.data == "You already sent a booking req to this user wait for response") {
                toast.warn(res.data);
            }
            else toast.success('✔ Booking req sent');
        }
    };

    return (
        <div>
            {(activeUser != '' && auth.getCurrentUser()!=null && auth.getCurrentUser().customer) && <Button className="" variant="contained" color="secondary" onClick={handleClickOpen}>
              Booking Request
      </Button>}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Send Booking Req to {activeUser}</DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Price (Rs)" type='Number' inputProps={{ min: "1", step: "1" }} value={priceValue} onChange={e => { changepriceValue(e.target.value); }} />
                        <TextField type='Number' inputProps={{ min: "1", max: "24", step: "1" }} label="Working Hours" onChange={e => { changeHoursValue(e.target.value) }} value={hoursValue} />
                        <TextField
    id="time"
    label="Booking Timings"
    type="time"
    defaultValue="02:30"
    className={classes.textField}
    value={dateValue}
    onChange={e => { changeDateValue(e.target.value); console.log(dateValue) }}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
{     /*                <TextField
                           id="datetime-local" 
                           label="Booking Timings"
                          type="datetime-local"
                         value={dateValue}
                            minValue="2020-01-14T8:00"
                            onChange={e => { changeDateValue(e.target.value); console.log(dateValue) }}
                             className={classes.textField1}
                             InputLabelProps={{
                                 shrink: true,
                                
                            }}
                    />*/}



                        <br/>
                        <TextField  className={classes.textField2}type="text" id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4" inputProps={{ min: "1", max: "3", step: "2" , maxLength: 150, }} aria-required="false"label="Description" placeholder="write 100-150 characters" onChange={e => { changeDescValue(e.target.value) }} value={descVal} />


                    </form>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleSubmit} variant="contained" color="primary" autoFocus>
                        Send
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default BookingReq;