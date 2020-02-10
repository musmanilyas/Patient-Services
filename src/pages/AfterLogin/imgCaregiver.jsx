import React from 'react';
import auth from '../../services/auth';
import emptyUser from '../../components/images/user.png';

const ImgCaregiver = ({id}) => {
    const [Sid,changeId]=React.useState(id);

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
        {(img!=null) ? <img
            src={img}
            className="card-img-top m-auto align-content-center col-12"
            alt="..."
            style={{
              borderRadius: "700px",
              width: "220px",
              height: "200px"
            }}
          />: <img
          src={emptyUser}
          className="card-img-top m-auto align-content-center col-12"
          alt="..."
          style={{
            borderRadius: "700px",
            width: "220px",
            height: "200px"
         }} />}
          
         </div>     
    
        
)
}
export default ImgCaregiver;


