import React,{Component} from 'react';
import auth from '../services/auth';
import { Route } from 'react-router-dom';




class getCust extends Component {
    state = {user:'' }


   async componentDidMount() {
       console.log("cdm",this.state.email);
       const res = await auth.getCustByEmail(this.props.email);
       this.setState({user:res.data._id});
       window.location=`/inbox${this.state.user}`
    }
    render() { console.log("retun",this.state.email);
        return (
       null    
           
     );
    }
}
 
export default getCust;
