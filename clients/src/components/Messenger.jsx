import React from 'react'
import LoginDialog from './accounts/LoginDialog';
import '../app.css';
import { useContext } from 'react';
import { Accountcontext } from './context/Accountprovider';
import Chatdialog from './chat/Chatdialog';

const Messenger = () => {

  const {accounts}= useContext(Accountcontext)
   
  
  return (
   <>
  <div className='container' >

  <ul className='navbar'>
    <li>home </li>
    <li> services</li>
    <li>contact</li>
    <li>about us  </li>
   </ul>
    {accounts? <Chatdialog/> : 
    <>
  
   <LoginDialog/>
   </>
    }
  </div>

     
    </>
  )
}

export default Messenger;
