import React from "react";
import {
  makeStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import BookingReq from '../components/bookingReq';
import ScrollToBottom from 'react-scroll-to-bottom';
import { CTX } from './store';
import auth from "../services/auth";
import refresh from "../components/images/refresh.png"
import {
  blue,
  red,
  green
} from "@material-ui/core/colors";
import {
  Link
} from 'react-router-dom';
import {
  object
} from "prop-types";
import {
  checkServerIdentity
} from "tls";
const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
   
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },

  topicsWindow: {
    width: "100%",
    height: "300px",


  },
  topicsWindowppl: {
    width: "100%",
    height: "300px",
    borderRight: "1px solid grey"

  },

  chatWindow: {
    width: "70%",
    height: "300px"
  },
  chatBox: {
    left: "30%",
    width: "50%"
  },
  button: {
    left: '30%',
    width: '15%',
    margin: theme.spacing(1),
    backgroundColor: '#28A745',
    color: 'black',
    '&:hover': {
      backgroundColor: 'darkgreen'
    }

  },
  chip: {
    border: 'outset',
    borderColor: '#28A745',
    textTransform:'Uppercase'
  },
  select: {
    '&:before': {
      borderColor: red
    },
    '&:after': {
      borderColor: blue,
    }
  }
}));

async function getToId(name) {
  try {
    const {
      data
    } = await auth.MsgGetProvByName(name);
    return data;
  } catch (error) {

  }

}

function datetime() {

  var date = new Date();
  return date.toLocaleString();

}

export default function Dashboard() {
  const classes = useStyles();
  //CTX Store

  const {
    allChats,
    sendChatAction,
    user,
    providerObj,
    SaveKeyss,
    totalUnseen,
    dispatch
  } = React.useContext(CTX);

  console.log("total", Object.values(allChats));
  //const check = Object.values(allChats).map(m => m.map(mp => mp.find(mpa => mpa.seen == true)));



  //console.log(providerObj);

  /*let obj = allChats[Object.keys(allChats)];

  let val = Object.values(allChats);
  for (let key in allChats) {
    for (let key2 in allChats[key]) {

      if (allChats[key][key2] === null) allChats[key].splice(key2);
    }

    console.log('allChats keys', allChats[key].shift());

  }

  console.log('allChats', allChats);*/
  const chatPersons = Object.keys(allChats);
  let check;

  console.log("chat Person", chatPersons);
  // console.log("allChats", chatPersons);

  console.log("Save Keys Dash", SaveKeyss);
  //local state
  const [seen, changeSeen] = React.useState({});
  const [activeChatWith, changeActiveTopic] = React.useState((chatPersons[0]) ? chatPersons[0] : chatPersons);
  const [SaveToId, changeSaveToId] = React.useState([]);
  const [textValue, changeTextValue] = React.useState('');

  console.log("activeChatWith", activeChatWith);

  /* for (let index = 0; index < chatPersons.length; index++) {
     console.log("for", chatPersons[index]);
     changeSaveToId(...SaveKeys, SaveToId[chatPersons[index]] = getToId(chatPersons[index])._id)*/
  // const res = getToId(chatPersons[index]);
  // console.log(res);
  //SaveKeys[chatPersons[index]] = ;

  function checkSeen(m) {

    const res = m.some(e => {
      return e.seen === false
    })
    return res
  };

  React.useEffect(() => {


    if (!activeChatWith) {
      dispatch({
        type: 'MESSAGE_SEEN',
        payload: activeChatWith
      });
    }
    if (chatPersons.length > 0) {
      for (let key in allChats) {
        check = allChats[key].some(m => m.seen == false);
        changeSeen({
          ...seen,
          [key]: check
        })
        console.log("seem", seen);
      }
    }

    if (!activeChatWith) {
      changeActiveTopic(chatPersons[0]);
    }

  }, [])

  async function msgSeenUpdate(name) {
    await auth.editMsgSeen(name);





  }
  return (

    <div style={{ backgroundColor:'white'}}>


      <Paper className={classes.root} >

        <Typography variant="h3"
          component="h3" > Chats </Typography>

        <Typography component="p" style={{textTransform:'uppercase'}} > {activeChatWith} </Typography>

        <div className={classes.flex} >
          <div className="overflow-auto col-sm-4 text-uppercase">
            <div className={classes.topicsWindow} >

              <List className={classes.topicsWindowppl}

                color="red" > {chatPersons.length != 0 && chatPersons.map(chatWith => (


                  <ListItem onClick={
                    e => {
                      changeActiveTopic(chatWith);
                      dispatch({
                        type: 'MESSAGE_SEEN',
                        payload: chatWith
                      });
                      dispatch({
                        type: 'MESSAGE_SEEN',
                        payload: activeChatWith
                      });
                      msgSeenUpdate(chatWith)
                    }
                  }
                    button key={
                      chatWith
                    } >

                    <ListItemText className={classes.ListItem} > {
                      activeChatWith == chatWith ? (< button className="btn btn-outline-success col-lg-10 btn-group-vertical text-uppercase" > {
                        chatWith
                      } </button>) : chatWith}{(checkSeen(allChats[chatWith]) && activeChatWith != chatWith) && (<span class="badge badge-info">New</span >)
                      } </ListItemText> </ListItem >

                ))
                } </List>
            </div>
          </div>

          {/* <div className="overflow-auto col-sm-8" > */}
<ScrollToBottom className="col-sm-8">          
            <div className={classes.chatWindow} >

              {
                chatPersons.length != 0 && allChats[activeChatWith].map((chat, i) => {
                  return (<div >
                    <div className={classes.flex}
                      key={i} >
                      <Chip label={chat.from}
                        className={classes.chip}
                      />  <Typography variant='body1'
                        gutterBottom > &nbsp; {chat.msg} </Typography> </div> <p className="text-muted text-left">&nbsp;{chat.timeDate}</p > </div>
                  )
                })
              } </div>  </ScrollToBottom>



        </div>
        <div className="col-4 m-auto"><BookingReq activeUser={activeChatWith} /></div>
        <div className={classes.flex} >


          <TextField onKeyPress={
            event => {
              if (event.key === "Enter" && (textValue != '') && chatPersons.length != 0) {
                sendChatAction({
                  from: 'You',
                  msg: textValue,
                  chatWith: activeChatWith,
                  toId: SaveKeyss[activeChatWith],
                  fromId: auth.getCurrentUser()._id,
                  timeDate: datetime() /*, toId: allChats[activeChatWith].find(m => { return m.toId.firstname == activeChatWith }).toId._id }*/
                });
                changeTextValue('');
              }
            }
          }
            className={
              classes.chatBox
            }
            label="Send msg"
            value={
              textValue
            }
            margin="normal"
            onChange={
              e => changeTextValue(e.target.value)
            }
          /> <Button disabled={
            chatPersons.length == 0 || textValue == ""
          }
            onClick={
              () => {

                sendChatAction({
                  from: 'You',
                  msg: textValue,
                  chatWith: activeChatWith,
                  toId: SaveKeyss[activeChatWith],
                  fromId: auth.getCurrentUser()._id,
                  timeDate: datetime()
                })
                changeTextValue('');

              }
            }
            variant="contained"
            endIcon={
              <Send > </Send>} className={classes.button} >
            Send </Button>





        </div><div className="text-right "><Link><img className="bg-success" src={refresh} data-toggle="tooltip" data-placement="top" title="Click to refresh Chat" onClick={() => { window.scrollTo(0, 0); window.location.reload(true) }} /> </Link></div >
      </Paper>

    </div >

  );

}