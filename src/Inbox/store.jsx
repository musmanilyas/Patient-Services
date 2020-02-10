import React from 'react';
import io from 'socket.io-client';
import auth from '../services/auth';
import { async } from './../services/auth';
import { forStatement, numericLiteral } from '@babel/types';
import { SocialSentimentDissatisfied } from 'material-ui/svg-icons';
import { S_IFREG } from 'constants';
import actions from './../redux/actions';
import { toast } from 'react-toastify';
import style from 'material-ui/svg-icons/image/style';

import { css } from 'glamor';

export const CTX = React.createContext();

function reducer(state, action) {
    // const {from,msg,chatWith}=action.payload;
    switch (action.type) {



        case 'RECIEVE_MESSAGE':

            if (state[action.payload.chatWith]) {
                console.log('recv msg if', Object.keys(state));
                return {
                    ...state, [action.payload.chatWith]: [
                        ...state[action.payload.chatWith]
                        , {
                            from: action.payload.from,
                            msg: action.payload.msg,
                            chatWith: action.payload.chatWith, timeDate: action.payload.timeDate, seen: action.payload.seen
                        }]
                }
            }
            else
                if (!state[action.payload.chatWith] && action.payload.chatWith != auth.getCurrentUser().firstname) {

                    if (action.payload.toId != auth.getCurrentUser()._id) { return state }
                    else
                        console.log('recv msg last elseif');
                    window.location.reload(true);
                    return {
                        ...state, [action.payload.chatWith]: [{
                            from: action.payload.from,
                            msg: action.payload.msg,
                            chatWith: action.payload.chatWith,
                            toId: action.payload.toId,
                            fromId: action.payload.fromId, timeDate: action.payload.timeDate, seen: action.payload.seen
                        }]


                    }
                }
            if (state == null)
                console.log('recv msg lastif');
            {
                return {
                    [action.payload.chatWith]: [

                        , {
                            from: action.payload.from,
                            msg: action.payload.msg,
                            chatWith: action.payload.chatWith,
                            toId: action.payload.toId,
                            fromId: action.payload.fromId,
                            timeDate: action.payload.timeDate, seen: action.payload.seen
                        }]
                }
            }

        case 'SETSTATE':

            return {
                ...state, [action.payload.chatWith]: [

                    , {
                        from: action.payload.from,
                        msg: action.payload.msg,
                        chatWith: action.payload.chatWith,
                        toId: action.payload.toId,
                        fromId: action.payload.fromId, timeDate: action.payload.timeDate, seen: action.payload.seen
                    }]
            }

        case 'MESSAGE_SEEN':
            console.log("MESSAGE_SEEN");
            let upState = { ...state };
            upState[action.payload].map(m => {

                if (m.seen === false) { console.log(m.seen) ;return m.seen = true }
            }
            );
            return state = { ...upState };
        /*  return {
              ...state, [action.payload.chatWith]: [
 
                  , {
                      from: action.payload.from,
                      msg: action.payload.msg,
                      chatWith: action.payload.chatWith,
                      toId: action.payload.toId,
                      fromId: action.payload.fromId, timeDate: action.payload.timeDate, seen: action.payload.seen
                  }]
          }
 
*/


        case 'UPDATESTATE':
            console.log(state);
            return {
                ...state, [action.payload.chatWith]: [

                    , {
                        from: action.payload.fromId,
                        msg: action.payload.msg,
                        chatWith: action.payload.chatWith, timeDate: action.payload.timeDate, seen: action.payload.seen
                    }]
            }
        case 'STATE':
            return state = action.payload;

        default:
            return state
        /*case 'INITSTATE':
            //  console.log(Object.keys(action.another)[0].from);
            //             return {
            // {...state,{action.payload.another}}
            let msg = null;
            let from = null;
            let obj = {};
         
            for (let key in action.another) {
                obj = (action.another[key].find(e => e.msg.toString()));
     
                msg = obj.msg;
                //(action.another[key].map(e => e.msg));
                from = obj.from;
            }
            //             }
            return {
                ...state, [Object.keys(action.another)]: [
     
                    , {
                        from,
                        msg
                    }]
            }*/

    }



}
let socket;
function sendChatAction(value) {





    socket.emit("chat_message", value);
}



const user = 'You';



function SendId(val) {




    socket.emit('send_id', val);


}
async function getCust(provById) {
    try {
        const res = await auth.custById(provById)
        if (res.status == 400) { return }
        return res;
    } catch (error) {
        return
    }
}

async function getProvider(provById) {



    try {

        const res = await auth.getProvById(provById)
        if (res.status == 400) { return }
        return res;
    }
    catch (rejectedValue) {
        return
    }

}







const Store = (props) => {

    let counter = 0;
    const arr = [];
    const [totalUnseen, changetotalUnseen] = React.useState(counter);
    const [SaveKeyss, changeSaveKeys] = React.useState(arr);
    const [providerObj, changeObj] = React.useState({ toId: "", fromId: "" });
    const [allChats, dispatch] = React.useReducer(reducer, null);
    let another = {};
    const provById = {};

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const abortController = new AbortController();
        const signal = abortController.signal;

        async function fetchData() {

            const res = await auth.MsgReqProv();
            const currUser = auth.getCurrentUser();


            if (props.match.params.id) {
                SendId(currUser);

                let provById = props.match.params.id;
                //  getProv = await getProvider(provById);
                if (provById != auth.getCurrentUser()._id) {
                    const getProv = await auth.ForGetUserById(provById);
                    console.log("result", getProv);
                    if (getProv.data != "") {
                        arr[getProv.data.firstname] = getProv.data._id;
                        changeObj({ toId: getProv.data._id, fromId: currUser._id });
                        another = { [getProv.data.firstname]: [] };
                        changeSaveKeys(...arr, arr);
                    }

                }

            }

            if (res.data.inbox.proId.length != 0) {
                const data = res.data.inbox.proId;

                // another = { [data[data.length - 1].toId.firstname]: [] };//last msg sent user will pop up on top


                for (let number of data) {
                    console.log("another", another);
                    if (!Object.keys(another).includes(number.toId.firstname)) {
                        another = { ...another, [number.toId.firstname]: [{ from: number.from, msg: number.msg, chatWith: number.toId.firstname, toId: number.toId, timeDate: number.timeDate, seen: number.seen }] };
                        //   SaveKeys[number.toId.firstname] = (number.toId._id);
                        arr[number.toId.firstname] = number.toId._id;
                        changeSaveKeys(arr);
                        console.log("Save Keys number", SaveKeyss);
                        /*  dispatch({
                              type: 'SETSTATE',
                              payload: { from: number.from, msg: number.msg, chatWith: number.toId.firstname }
                          });*/
                        /* dispatch({
                             type: 'INITSTATE',
                             another: { [number.toId.firstname]: [{ from: number.from, msg: number.msg }] }
                         });*/

                    }



                    else
                        another = {
                            ...another, [number.toId.firstname]: [
                                ...another[number.toId.firstname]
                                , {
                                    from: number.from,
                                    msg: number.msg,
                                    chatWith: number.toId.firstname, toId: number.toId, timeDate: number.timeDate, seen: number.seen
                                }]
                        }
                    console.log("inside else if", another);

                    /*  dispatch({
                          type: 'UPDATESTATE',
                          payload: { from: number.from, msg: number.msg, chatWith: number.toId.firstname }
                      });*/


                    // else


                    //     another = {
                    //         ...another, [number.toId.firstname]: [

                    //             , {
                    //                 from: number.from,
                    //                 msg: number.msg,
                    //                 chatWith: number.toId.firstname
                    //             }]
                    //     }


                }
                if (another != null) {
                    dispatch({
                        type: 'STATE',
                        payload: another
                    });
                }

                // console.log(response.data.inbox.provId.filter(n => n.toId.firstname == 'Mirsab Provider'));
            }

            else dispatch({
                type: 'STATE',
                payload: another
            });



        }
        fetchData({ signal: signal });
        return function cleanup() {
            abortController.abort();
        }
    }, [])

    /*  if (socket) {
     
          socket = io(':3010');
     
          let { _id } = auth.getCurrentUser();
          SendId(_id);
     
          socket.io.on("chat_msg", function (msg) {
              /* socket.on(`${msg.toId}`, function (msg) {
       
                   dispatch({ type: 'RECIEVE_MESSAGE', payload: msg })
               });*/
    // console.log(another);
    // console.log('msg from server', msg);
    // if (Object.keys(another).includes(msg.chatWith) && another[msg.chatWith].length == 0) {
    //   console.log("in dispatch if", msg, another[msg.chatWith].length);
    //  dispatch({ type: 'RECIEVE_MESSAGE', payload: msg })
    // }
    //else
    //  dispatch({ type: 'RECIEVE_MESSAGE', payload: msg })
    /*        })
     
     
        }*/
    // socket = io(':3010');

    if (!socket) {
        socket = io(':3010');

        let val = auth.getCurrentUser();
        SendId(val);
        socket.on("chat_msg", function (msg) {

if(msg.from !='You'){
    toast.success(`You have a new msg from ${msg.from.toUpperCase()}`, {
        position: toast.POSITION.TOP_CENTER, className: css({
            background: "#E0E0E0",color:'black',borderRadius:'25px'
        })  
      }); }
            if (msg.chatWith != auth.getCurrentUser().firstname && Object.keys(another).length != 0) {
                // console.log("in dispatch if", msg, another[msg.chatWith].length);
                dispatch({ type: 'RECIEVE_MESSAGE', payload: msg })
            }

            else
                if (Object.keys(another).length == 0) {
                    // console.log("in dispatch ELSE", msg, another[msg.chatWith].length);
                    dispatch({ type: 'RECIEVE_MESSAGE', payload: msg })

                }
                else {
                    another = { ...another, [msg.chatWith]: [{ from: msg.from, msg: msg.msg, chatWith: msg.chatWith, toId: msg.toId, fromId: msg.fromId, seen: msg.seen }] };
                    window.location.reload(true);
                    // dispatch({ type: 'STATE', payload: another })
                }
        })



    }
    if (!allChats) return null




    return (
        <CTX.Provider value={{ allChats, sendChatAction, user, providerObj, SaveKeyss, totalUnseen, dispatch }}>

            {props.children}
        </CTX.Provider>
    )




}
export default Store;