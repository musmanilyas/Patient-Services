import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { CTX } from '../../Inbox/store';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Home from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import auth from '../../services/auth';
import users from '../../components/images/user.png';
import Search from '../NavbarMaterial/searchBar';
import NavbarUser from './navbarUser';
import NavbarProvider from './navbarProvider';
import Box from '@material-ui/core/Box';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import FilterTiltShiftIcon from '@material-ui/icons/FilterTiltShift';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PostAddIcon from '@material-ui/icons/PostAdd';
import InfoIcon from '@material-ui/icons/Info';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import MessageIcon from '@material-ui/icons/Message';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import logo from '../images/WebLogo3.PNG'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  marginBottom:'0px'
  ,
 

  },
  app:{height:'20%',
    [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(3),
        width: '98%',
        height:'30%'
      },
  },
  
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    
    marginLeft: theme.spacing(2),
    marginLeft: '100%' ,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },
  list:{

    display: 'flex',

    
    flexDirection: 'row',
   
    "&:hover": {
        textDecoration:'none',
       
      }
  },

  
icon:{


    
    backgroundColor:'white'

},
link:{
    color:'white',
    marginTop:'10px',
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
      
  
},
homeHover:{
  "&:hover": {
    textDecoration:'none',
    color:'white',}

}

}));

export default function NavbarMaterial({user,provider,seen}) {
  const classes = useStyles();
  const [clicked,setClicker]=React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


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
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';


 
const renderMobileProvider=(<Menu
  anchorEl={mobileMoreAnchorEl}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  id={mobileMenuId}
  keepMounted
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  open={isMobileMenuOpen}
  onClose={handleMobileMenuClose}
>


            <Link className="" to="/home" >
  <MenuItem onClick={handleMobileMenuClose}>

    
              
    <IconButton aria-label="show 4 new mails" color="white">
   
 <Home></Home>
     </IconButton>
     Home
</MenuItem>
                </Link>


                                    <Link  to="/allposts">     
                  
<MenuItem onClick={handleMobileMenuClose}> 
              
  <IconButton aria-label="show 11 new notifications" color="white">
  <ViewDayIcon/>
  </IconButton>View Posts
</MenuItem>
              </Link>



              <Link  to="/services">






           
                  
<MenuItem onClick={handleMobileMenuClose}> 
              
  <IconButton aria-label="show 11 new notifications" color="white">
    <GroupWorkIcon></GroupWorkIcon>
  </IconButton>Services
</MenuItem>
              </Link>

              <Link  to="/caregivers">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" color="white">
                        
                          <FilterTiltShiftIcon/></IconButton>CareGivers
                      </MenuItem>
                                    </Link>
          
              <Link  to="/inbox">     
                  
                  <MenuItem onClick={handleMobileMenuClose}> 
                                
                    <IconButton aria-label="show 11 new notifications" color="white">
                    <MessageIcon/>

                    </IconButton>Messages
                  </MenuItem>
                                </Link>

                                <Link  to="/bookings">     
                  
                  <MenuItem onClick={handleMobileMenuClose}> 
                                
                    <IconButton aria-label="show 11 new notifications" color="white">
                   
                    <LibraryBooksIcon/></IconButton>Bookings
                  </MenuItem>
                                </Link>

                                <Link  to="/profile-user">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" color="white">
                        
                        <AccountCircle/></IconButton>Profile
                      </MenuItem>
                                    </Link>
          


                                <Link  to="/logout">     
                  
                  <MenuItem onClick={handleMobileMenuClose}> 
                                
                    <IconButton aria-label="show 11 new notifications" color="white">
                    <ExitToAppIcon />
                    </IconButton>Logout
                  </MenuItem>
                                </Link>




</Menu>
                
  );

const renderMobileMenuUser= (<Menu
  anchorEl={mobileMoreAnchorEl}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  id={mobileMenuId}
  keepMounted
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  open={isMobileMenuOpen}
  onClose={handleMobileMenuClose}
>


            <Link className="" to="/home" >
  <MenuItem onClick={handleMobileMenuClose}>

    
              
    <IconButton aria-label="show 4 new mails" >
   
 <Home></Home>
     </IconButton>
     Home
</MenuItem>
                </Link>

                <Link  to="/post">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" >
                        <PostAddIcon/>
                        </IconButton>Post
                      </MenuItem>
                                    </Link>

                                    <Link  to="/viewpost">     
                  
<MenuItem onClick={handleMobileMenuClose}> 
              
  <IconButton aria-label="show 11 new notifications" >
  <ViewDayIcon/>
  </IconButton>View Posts
</MenuItem>
              </Link>



              <Link  to="/services">






           
                  
<MenuItem onClick={handleMobileMenuClose}> 
              
  <IconButton aria-label="show 11 new notifications" >
    <GroupWorkIcon></GroupWorkIcon>
  </IconButton>Services
</MenuItem>
              </Link>
              <Link  to="/caregivers">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" >
                        
                          <FilterTiltShiftIcon/></IconButton>CareGivers
                      </MenuItem>
                                    </Link>
          

              <Link  to="/inbox">     
                  
                  <MenuItem onClick={handleMobileMenuClose}> 
                                
                    <IconButton aria-label="show 11 new notifications" >
                    <MessageIcon/>

                    </IconButton>Messages
                  </MenuItem>
                                </Link>

                                <Link  to="/bookings-user">     
                  
                  <MenuItem onClick={handleMobileMenuClose}> 
                                
                    <IconButton aria-label="show 11 new notifications" >
                   
                    <LibraryBooksIcon/></IconButton>Bookings
                  </MenuItem>
                                </Link>

                                <Link  to="/logout">     
                  
                  <MenuItem onClick={handleMobileMenuClose}> 
                                
                    <IconButton aria-label="show 11 new notifications" >
                   
                    <ExitToAppIcon/></IconButton>Logout
                  </MenuItem>
                                </Link>




</Menu>
                
  );
  const renderMobileMenu =( <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >


                    
                    
                    
                    

        <Link className="" to="/home" >
      <MenuItem onClick={handleMobileMenuClose}>
 
        
                  
        <IconButton aria-label="show 4 new mails" >
       
     <Home></Home>
         </IconButton>
         Home
</MenuItem>
                    </Link>
                    <Link  to="/services">
                      
      <MenuItem onClick={handleMobileMenuClose}> 
                    
        <IconButton aria-label="show 11 new notifications" >
          <GroupWorkIcon></GroupWorkIcon>
        </IconButton>Services
      </MenuItem>
                    </Link>
                    
      
                    <Link  to="/caregivers">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" >
                        
                          <FilterTiltShiftIcon/></IconButton>CareGivers
                      </MenuItem>
                                    </Link>
          
                                    <Link  to="/login">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications">
                        
                          <VpnKeyIcon/></IconButton>Login
                      </MenuItem>
                                    </Link>
                    
                              
                              
                    <Link  to="/register">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" >
                        
                        <HowToRegIcon></HowToRegIcon></IconButton>Register
                      </MenuItem>
                                    </Link>
                    
               
    
               <Link  to="/aboutus">
                      
                      <MenuItem onClick={handleMobileMenuClose}> 
                                    
                        <IconButton aria-label="show 11 new notifications" >
                        
                        <InfoIcon/></IconButton>About Us
                      </MenuItem>
  </Link></Menu>);
                    

  const [img,changeImg]=React.useState(null);
  return (
     
  <React.Fragment>
     
     <Box component='div' style={{backgroundColor:'#1976D2',borderRadius:'12px',height:'15%' }} className={classes.app} >
        <Toolbar >
        <div className={classes.sectionMobile}>
            <IconButton
            
            style={{backgroundColor:'white',position:'absoulute'}}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
               <MenuIcon  />
            </IconButton >
          </div><Link to="/home" className={classes.homeHover}>
           
        <Typography className={classes.title} style={{fontFamily: 'italic',fontSize:'25px'}} variant="h6" noWrap>
            Patient Services
          </Typography>
      
          </Link>
         
          <div className={classes.search}>
            <div className={classes.searchIcon}>
          
          
             </div> <Search
            
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          /> 
     

             
          
         
    
          </div>
       
          {(provider == null && user == null) &&<div className={classes.sectionDesktop} >
            
              <List className={classes.list}>
                  <ListItem >
                    <Link className={classes.link} to="/home">
                      <p>Home</p>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link className={classes.link} to="/services">
                     <p> Services</p>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link className={classes.link} to="/caregivers">
       <p> CareGivers</p>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link className={classes.link} to="/login">
                      <p>Login</p>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link className={classes.link} to="/register">
                      <p>register</p>
                    </Link>
                    </ListItem>
                   
                    <ListItem>
                    <Link className={classes.link} to="/aboutus">
                      <p>Aboutus</p>
                    </Link>
                    </ListItem>
                    </List></div>}
<div className={classes.sectionDesktop}>
                    {user &&<NavbarUser  user={user} seen={seen}/>}
                   
                    {provider &&<NavbarProvider  provider={provider} seen={seen}/>}
                    </div>





            {/*<IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
  </IconButton>*/}
          
        
         
        </Toolbar>
         { user  && renderMobileMenuUser} 
         { provider  && renderMobileProvider} 
      {(provider == null && user == null) && renderMobileMenu}
      {renderMenu}</Box>
      </React.Fragment>
  );
}
