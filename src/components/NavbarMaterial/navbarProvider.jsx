







import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import auth from '../../services/auth';
import users from '../../components/images/user.png';



const useStyles = makeStyles(theme => ({


    list:{

        display: 'flex',
    
        
        flexDirection: 'row',
        padding: 0,
        "&:hover": {
            textDecoration:'none',
           
          }
      },
    
      
    icon:{
    
    
        
        backgroundColor:'white'
    
    },
    link:{
        color:'white',
        
        textTransform:'uppercase',
        letterSpacing:'1px',
        "&:hover": {
            textDecoration:'none',
            color:'white',
            
            borderTop:'none',
            borderRight:'none',
            borderLeft:'none',
            border:'solid',
            BorderColor:'white',
            "&:transition":{ width : '0.3s', ease:' 0s',left: '0.3s' ,ease: '0s'}
            ,
            letterSpacing:'2px'
            
                   }
          ,
          
      
    }
,
sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },


}));





const NavbarProvider = ({provider,seen}) => {
    const classes = useStyles();
    const [clicked,setClicker]=React.useState(false);


    React.useEffect(()=>{


        getPic();
      
      
      
      
      
      },[])
      
      
      async function getPic (){
        
          if(auth.getCurrentUser()){
        const res = await auth.getUserProfilePic();
      if(res){    changeImg(res);
        
      }
      else{
        changeImg(users);
      
      
      }}
      else changeImg(users);
      }
    

    const [img,changeImg]=React.useState(null);
    return (<div className={classes.sectionDesktop}>
            
        <List className={classes.list}>
            <ListItem >
            <Link className={classes.link} to="/home">
                  Home
                </Link>
              </ListItem>
              {/* <ListItem>
              <Link className={classes.link} to="/services">
                  Services
                </Link>
              </ListItem>*/}
              <ListItem> 
              <Link className={classes.link}  to="/allposts">
                  Viewposts
                </Link>
              </ListItem>
              <ListItem>
              <Link className={classes.link}  to="/caregivers">
              CareGivers
                </Link>
              </ListItem>
              
             
              <ListItem>
              <Link className={classes.link} to="/bookings">
                  bOOKINGS
                  <span className="badge badge-primary badge-pill">{seen}</span>
                </Link>
              </ListItem>

              <ListItem>
              <Link className={classes.link} to="/inbox" onClick={()=>{setClicker(true)}}>
                      Inbox
                      {(seen && seen.length != 0 && clicked==false) ? <span className="badge badge-primary badge-pill">{seen.length}</span> : null}
                    </Link>
              </ListItem>

              <ListItem>
              <Link className={classes.link} to="/profile-user">
              Profile
                </Link>
                </ListItem>

              <ListItem>
              <Link className={classes.link} to="/logout">
                  Logout
                </Link>
                </ListItem>
               
               <Link to="/profileprov" style={{color:'white'}}> <Avatar aria-label="Profile Pic"  src={img} className='ml-2 mt-4' >


{provider.firstname}  </Avatar>{provider.firstname}   </Link> 
              </List></div>  );
}
 
export default NavbarProvider;