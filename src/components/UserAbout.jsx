
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';






const UserAbout = ({data}) => {
    return (  




<List>




<ListItem paragraph color='textPrimary'>Basic Info</ListItem>
  <Divider style={{marginLeft:'18px'}}></Divider>
                  <ListItem className=" text-left">
                  <i className="fa fa-user-circle-o text-info" aria-hidden="true"></i>  <Typography color="textSecondary"> Name:</Typography>

                      
                      <ListItem className=" text-right ml-5">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        {`${data.firstname} ${data.lastname}`}
                      </Typography>
                      </ListItem>
                  </ListItem>

                  <ListItem className=" text-left">
                  <i class="fa  fa-male text-info" aria-hidden="true"></i>  <Typography color="textSecondary"> Gender:</Typography>

                      
                      <ListItem className=" text-right ml-5">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        {data.gender}
                      </Typography>
                      </ListItem>
                  </ListItem>
                  
                  <ListItem className=" text-left">
                  <i class="fa   fa-location-arrow  text-info" aria-hidden="true"></i>  <Typography color="textSecondary"> From:</Typography>

                      
                      <ListItem className=" text-right ml-5">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        &nbsp;&nbsp;{data.cities}
                      </Typography>
                      </ListItem>
                  </ListItem>
                  


                  <ListItem className=" text-left">
                  <i class="fa  fa-university text-info" aria-hidden="true"></i>  <Typography color="textSecondary">Institute:&nbsp;</Typography>

                      
                      <ListItem className=" text-right ml-4">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                       &nbsp; {data.institutename}
                      </Typography>
                      </ListItem>
                  </ListItem>


  <ListItem paragraph color='textPrimary'>Work Info</ListItem>
  <Divider style={{marginLeft:'18px'}}></Divider>
                  <ListItem className=" text-left">
                  <i class="fa fa-wpexplorer text-info" aria-hidden="true"></i>  <Typography color="textSecondary"> Service:</Typography>

                      
                      <ListItem className=" text-right ml-5">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        {data.service}
                      </Typography>
                      </ListItem>
                  </ListItem>

                  <ListItem className=" text-left">
                  <i className="fa  fa-life-buoy text-info mr-auto" /> <Typography color="textSecondary">Experience:</Typography>

                      
                      <ListItem className=" text-right ml-4">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        {data.experience}
                      </Typography>
                      </ListItem>
                  </ListItem>
                  <ListItem className=" text-left">
                  <i className='fa fa-money text-info'></i><Typography color="textSecondary">HourlyRate:&nbsp;</Typography>

                      
                      <ListItem className=" text-right ml-3">
                      

                      <Typography
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        {data.ratesperhour}
                      </Typography>
                      </ListItem>
                  </ListItem>


                  <ListItem className=" text-left">
                  <i className='fa fa-map-marker text-info'></i><Typography color="textSecondary">&nbsp;LivesIn:&nbsp;</Typography>
                      <ListItem className=" text-right ml-5">
                      <Typography
                    
                        style={{
                          
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        color="textPrimary"
                      >
                        {data.cities}
                      </Typography>
                      </ListItem>
                  </ListItem>



                  </List>



    );
}
 
export default UserAbout;