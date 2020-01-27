import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import auth from '../services/auth';
import Avatar from '@material-ui/core/Avatar';
import pic from './images/dsc.jpg';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import user from '../components/images/user.png';
export default class UserProfilePicture extends Component {
    state = {
            open: false,
            files: [],
            fileSaved:false,
            response:false,
            img:null,
            initialPicNull:true
        };
    


       async componentDidMount() {
         try {
            const pic=await auth.getUserProfilePic();
            console.log(pic);
            if(pic){
                this.setState({img:pic,initialPicNull:false})
            }
          
            
       
         } catch (error) {
             
         }}
      
    handleClose() {
        this.setState({
            open: false
        });
    }
 

handleReq =async (fd)=>{
    
   const res= await auth.EditProfilePicture(fd);
   if(this.state.img==null){window.location.reload(true);}
if(res.status==200){
 const img= await auth.getUserProfilePic();
  
       console.log('imgdata',img);
        this.setState({img:img});


}
   

 
    }


 
   handleSave =files=> {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files, 
            open: false,
            fileSaved:true
        }, function () {
           
            const fd=new FormData();
        fd.append('imageP',this.state.files[0],auth.getCurrentUser()._id);
                   
        this.handleReq(fd);
        });;

      // this.handleReq();

       
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
    render() {
       
        return (
         
            <div className='col-12 ' style={{backgroundColor:'white'}}>  { console.log(this.state.initialPicNull)}
                 {( this.state.img==null) ? <img className='col-12' alt="Profile Pic" src={user } style={{width:'20%',height:'20%',marginTop:'50px',borderRadius:'150%'}} />:<img className='col-12' alt="Profile Pic" src={this.state.img } style={{width:'20%',height:'20%',marginTop:'50px',borderRadius:'150%'}} />}
       
<br/>
                <Button style={{marginTop:'20px'}} variant="contained" color="primary" onClick={this.handleOpen.bind(this)}>
                  Edit Profile Pic
                </Button>
                <DropzoneDialog
              
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                    filesLimit={1}
                />
   
            </div>
        );
    }
}