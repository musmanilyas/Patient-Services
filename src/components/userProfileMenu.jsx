import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Slider from './slider';
import auth from '../services/auth';
import UserAbout from './UserAbout';
import UserReview from './userReview';
import ProfileProv from '../pages/AfterLogin/profileprovider'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box >{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
   
  },

      tab:{
       
            // eslint-disable-line no-useless-computed-key
           width: '95%',
           
          
            display:'flex',
        
        
           [theme.breakpoints.down('sm')]: {
            width: '90%',
            
          
           marginLeft:'8%',
           marginRight:'0%'
           },
      },

      tabwords:{
       
        // eslint-disable-line no-useless-computed-key
        fontStyle:"oblique",
        fontFamily:"Monospace" ,
        fontSize:'20px',
        display:'flex',
        fontSize:'20px',  
     [theme.breakpoints.down('sm')]: {
      fontStyle:"oblique",
      fontFamily:"Monospace" ,
      fontSize:'20px',
      
      padding: '0',
   height:'10%',
   fontSize:'20px',
 
       },
    },
     
  
}));

const FullWidthTabs=({data}) =>{
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Box position="static" color="default" className={classes.tab} >
        <Tabs       display="flex"  className={classes.tabwords}  value={value} 
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant=""
          aria-label="full width tabs example"
        >
          <Tab  label="About"  className={classes.tabwords}{...a11yProps(0)} />
          <Tab label= 'Reviews'  className={classes.tabwords}{...a11yProps(1)} />
         

{(auth.getCurrentUser()!=null && auth.getCurrentUser()._id==data._id)&& <Tab label= 'Edit Profile'  className={classes.tabwords}{...a11yProps(1)} />}

        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel   value={value} style={{marginTop:'30px'}} index={0} dir={theme.direction}>
          
        <div className="  ml-0 mt-2 card container row col-sm-12 ">
                  
                  <UserAbout data={data}></UserAbout>
                            </div>
                                
          
          
          
        </TabPanel>
        <TabPanel  value={value} style={{marginTop:'30px'}} index={1} dir={theme.direction}>
        <UserReview data={data}></UserReview>
        </TabPanel>
        <TabPanel   value={value} index={2} dir={theme.direction}>
        <div className="  ml-0 mt-2 card container row col-sm-12 ">  <ProfileProv></ProfileProv></div> 
        </TabPanel>
        
        
      </SwipeableViews>
    </div>
  );
}
export default FullWidthTabs;