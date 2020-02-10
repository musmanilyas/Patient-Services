import React from 'react';
import auth from '../../services/auth';
import emptyUser from '../../components/images/user.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  
  


const AvatarProfile = ({id}) => {
    const [Sid,changeId]=React.useState(id);
    const classes = useStyles();
    React.useEffect(()=>{
        getProPic(id);


console.log(id);


    },[])

async function getProPic(id) {
    const pic =await auth.getUserProfilePicOtherUser(id);
    if(pic){
  changeImg(pic);
    
        return img;
      }
      

    }
    const [img,changeImg]=React.useState(null)
    
    
    return (   
        <div>
        {(img!=null) ? <Avatar
            src={img}
            className={classes.small}
            alt="..."
        
          />: <Avatar
          src={emptyUser}
          className={classes.small}
          alt="..."
         />}
          
         </div>     
    
        
)
}
export default AvatarProfile;


