import React, { Component } from 'react';


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
import Typography from 'material-ui/styles/typography';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import Loader from "./Animation/loader";

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



const ForgotPassword = ({forgotP}) => {



    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [emailEntered, changeEmailEntered] = React.useState(false);
    const [verCodeEntered,changeverCodeEntered]=React.useState(false);
    const [mailCode,changeMailCode] =React.useState('');
    const [_id,change_id] =React.useState('');
    const [email, changeEmail] = React.useState('');
    const [verCode,changeVerCode]=React.useState('');
    const [newPass, changeNewPass] = React.useState('');
    const [confirmPass, changeConfirmPass] = React.useState('');
const [loading,changeLoading]=React.useState(false);
    const schema = {
        newPass: Joi.string()
    
        .required()
        .alphanum()
        .min(3)
        .max(7)
        .label("Password"),
    };




    const handleClickOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {

        handleClickOpen();

    }

const handleVerCode=()=>{

    if (mailCode ==verCode){
        changeverCodeEntered(true);
    }
    else{
        toast.error('invalid verification Code');
    }


}
    const handleSendEmail= async () =>{
        if (email != ''){
            changeLoading(true);   
            setTimeout(() => {
                changeLoading(false );
              }, 3000) ;
            const data={email:email};
             const res= await auth.forgotPasswordReq(data);
            if(res.status==200){
                changeEmailEntered(true);
                console.log(res.data);
            toast.success('Verification Code Sent!!');
            
            changeMailCode(res.data.code);
            change_id(res.data._id);
            }
                else{
                    return 

                }

                
            }
            
            else toast.error('Email field cannot be empty!!');

        
        }
        const [error,changeError]=React.useState('');






    const handleSubmit = async () => {
const checkValid=Joi.validate({newPass},schema);
console.log(checkValid);
if(checkValid.error===null){

    const res=await auth.changePasswordSubmit({email,_id,newPass});
    if(res.status==200){

        toast.success('Your password has been changed');
        setOpen(false);
    }

    }

    else changeError(checkValid.error.details[0].message);
}
  
  return (<div>
  
  <Link style={{fontFamily: 'italic',fontSize:'15px',marginLeft:'5px', paddingBottom:'8px'}} className="mt-5" variant="contained" color="secondary"  onClick={handleClickOpen}>
                ForgotPassword?
      </Link>
      
  
        <Dialog
    
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Forgot Password??</DialogTitle>
            <DialogContent>
                <form className={classes.root} noValidate autoComplete="off">
                  { emailEntered ==false && <React.Fragment> <TextField id="standard-basic" label="Enter Email" type='email' value={email} onChange={e => { changeEmail(e.target.value); }} />
                    {loading && <div className=' col-12 text-info'>please wait....<Loader></Loader></div>}
                    <Button onClick={()=>handleSendEmail()}  variant="contained" color="primary"  >
                    Submit
  </Button></React.Fragment>}
   {(emailEntered==true && verCodeEntered==false)&&

      (<React.Fragment>
      <TextField  type="text" id="standard-basic"
             label="code" 
      onChange={e => { changeVerCode(e.target.value) }} value={verCode} />                <Button onClick={handleVerCode} variant="contained" color="primary" >
      verify
</Button> </React.Fragment>)

      }
{verCodeEntered &&

(<React.Fragment>
<TextField  type="password" id="standard-basic"
       label='password'
       value={newPass}
onChange={e => { changeNewPass(e.target.value) } } />

{error && <div className='alert alert-danger text-info'>{error}</div>}
<Button onClick={()=>handleSubmit()} variant="contained" color="primary" >
Ok
</Button> </React.Fragment>)

}

 </form>
</DialogContent>
        </Dialog>
    </div>
  );
}
 
export default ForgotPassword;