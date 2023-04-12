import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { Accountcontext } from '../context/Accountprovider';
import { addUser } from '../../service/api';
const LoginDialog = () => {

  const {setaccount}= useContext(Accountcontext)
  
 
  const onloginsuccesss = async(res)=>{
    let cod = jwt_decode(res.credential)
      setaccount(cod)
     await addUser(cod);
  };

  const onloginerror = (err) =>{
  console.log(err);
  }


  return (
    <div className='dialog'>
      
      <ol>
        <li>open whatsapp on your phone </li>
        <li>tap menu setting and select watsapp web </li>
        <li> point your phone to the screeen and capture the code </li>
      </ol>
      <span className="googlegogin">
     
    
   <GoogleLogin onSuccess={onloginsuccesss}
                onError={onloginerror}  />
      
   </span>
      

     
    </div>
  )
}

export default LoginDialog;
