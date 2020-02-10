import httpservices from "./httpService";
import apiUrl from "../config.json";

import jwtDecode from "jwt-decode";

const tokenkey = "token";

const baseApiUri = " https://1204bc12.ngrok.io/";

export function get() {
  return httpservices.get(apiUrl + "/new");
}

export function confirmEmail(app) {
  return httpservices.post( "http://localhost:3010/api/mailconfirm", app);
}
export function cust(app) {
  return httpservices.post("http://localhost:3010/api/customer", app);
}
export function custById(app) {
  return httpservices.get(`http://localhost:3010/api/customer/${app._id}`);
}

export function getProvBookings() {
  
  return httpservices.get(`http://localhost:3010/api/bookings/${getCurrentUser()._id}`);
}

export function getUserBookings() {
  
  return httpservices.get(`http://localhost:3010/api/bookings/user/${getCurrentUser()._id}`);
}


export function getCustByEmail(app) {
  return httpservices.get(`http://localhost:3010/api/customer/email/${app}`);
}


export function custByIdUpdate(app) {
  return httpservices.put(`http://localhost:3010/api/customer/${app._id}`, app);
}


export function bookingAccept(app) {
  return httpservices.put(`http://localhost:3010/api/bookings/${app}`);
}
export function bookingDecline(app) {
  return httpservices.delete(`http://localhost:3010/api/bookings/${app}`);
}

export async function login(app) {
  const { data: jwt } = await httpservices.post(
    "http://localhost:3010/api/auth",
    app
  );
  localStorage.setItem(tokenkey, jwt);
}
export function worker(app) {
  return httpservices.post("http://localhost:3010/api/worker", app);
}

export function getService(app) {
  return httpservices.get(`http://localhost:3010/api/providers/service/${app}`);
}

export function getallposts() {
  return httpservices.get("http://localhost:3010/api/post");
}
export function post(app) {
  return httpservices.post("http://localhost:3010/api/post", app);
}
export function getpost(app) {
  return httpservices.get(`http://localhost:3010/api/post/${app}`);
}

export function getCareGivers(app) {
  return httpservices.get(`http://localhost:3010/api/caregivers/`);
}

  export function getProfileData(app) {
    
    return httpservices.get(`http://localhost:3010/api/caregivers/profile/${app}`);
  }

export function getProvById(app) {
  return httpservices.get(`http://localhost:3010/api/providers/${app._id}`);
}

export function postProvById(app) {
  return httpservices.post(`http://localhost:3010/api/providers/`, app);
}
export function editpost(app) {
  return httpservices.put(`http://localhost:3010/api/post/${app._id}`, app);
}


export function sendBookingReq(app) {
  return httpservices.post(`http://localhost:3010/api/bookings/`, app);
}



export function forgotPasswordReq(app) {
  return httpservices.post(`http://localhost:3010/api/forgotPassword/`, app);
}





export function changePasswordSubmit(app) {
  return httpservices.put(`http://localhost:3010/api/forgotPassword/`, app);
}




export function provByIdUpdatePut(app) {
  return httpservices.put(
    `http://localhost:3010/api/providers/${app._id}`,app
  );
}


export function provByIdUpdate(app) {
  return httpservices.get(
    `http://localhost:3010/api/providers/${app._id}`
  );
}



export function MsgReqProv(app) {
  const Current_user = getCurrentUser();
  return httpservices.get(
    `http://localhost:3010/api/msgs/${Current_user._id}`,
    app
  );
}


export function MsgReqGet(app) {
  return httpservices.get(
    `http://localhost:3010/api/msgs/${app._id}`);


}

export function MsgGetProvByName(app) {
  return httpservices.get(
    `http://localhost:3010/api/msgs/byname/${app}`);


}
export function editMsgSeen(app) {
  let { _id } = getCurrentUser();
  return httpservices.put(`http://localhost:3010/api/msgs/byname/${app}/${_id}`, app);
}



export function getUserProfilePicOtherUser(id) {
  
console.log(id);
  return httpservices.get(
    `http://localhost:3010/api/profilePicture/${id}.png`, { responseType: 'arraybuffer' })
    .then(response => {
      console.log(response);
      if(response.headers['content-length']!= '0'){
      let blob = new Blob(
        [response.data], 
        { type: response.headers['content-type'] }
      )
      let image = URL.createObjectURL(blob)
      
      return image
      }else return null
    });}





export function getUserProfilePic() {
  const id=getCurrentUser()._id;

  return httpservices.get(
    `http://localhost:3010/api/profilePicture/${id}.png`, { responseType: 'arraybuffer' })
    .then(response => {console.log(response);
      if(response.headers['content-length']!= '0'){
      let blob = new Blob(
        [response.data], 
        { type: response.headers['content-type'] }
      )
      let image = URL.createObjectURL(blob)
      return image
    }
    else return;
  }
    );}
  
 /*export function getUserProfilePic() {
const id=getCurrentUser()._id;

  return httpservices.get(
    `http://localhost:3010/api/profilePicture/${id}.png`)}*/



export function ForGetUserById(app) {
  return httpservices.get(
    `http://localhost:3010/api/msgs/byid/${app}`);


}






export function getProviderReviews(app) {
  return httpservices.get(
    `http://localhost:3010/api/reviews/${app}`);


}



export function giveReview(app) {
  return httpservices.post(
    `http://localhost:3010/api/reviews`, app);


}

export function MsgReqCust(app) {
  return httpservices.post(
    `http://localhost:3010/api/msgs`, app);


}

export function EditProfilePicture(app) {
  return httpservices.post(
    `http://localhost:3010/api/profilePicture`, app);


}




export function getCurrentUserType() {
  const Current_user = getCurrentUser();
  try {
    if (Current_user.customer) {
      const customer = Current_user;

      return customer;
    } else {
      const provider = Current_user;

      return provider;
    }
  } catch (error) { }
}

export async function logOut(app) {
  localStorage.removeItem(tokenkey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenkey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function loginwithJwtHeader(jwt) {
  localStorage.setItem(tokenkey, jwt);
}

export function getToken() {
  return localStorage.getItem(tokenkey);
}



export default {
  getToken,
  MsgReqCust, MsgReqProv,
  postProvById,
  confirmEmail,
  editpost, MsgGetProvByName,
  worker, MsgReqGet,
  cust,
  login,
  loginwithJwtHeader,
  logOut,
  post,
  getCurrentUser,
  getpost,
  custByIdUpdate,
  getCurrentUserType,
  custById,getProvBookings,
  getProvById,
  provByIdUpdate,
  getallposts, getService,
  getCareGivers, ForGetUserById,
  editMsgSeen, sendBookingReq,getCustByEmail,bookingAccept,bookingDecline
  ,getProfileData,provByIdUpdatePut,forgotPasswordReq,EditProfilePicture,getUserProfilePic,getUserProfilePicOtherUser,getUserBookings
,giveReview,getProviderReviews,changePasswordSubmit


};
