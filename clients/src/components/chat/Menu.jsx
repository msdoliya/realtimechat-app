import React from 'react'
import {BiMessageAltDetail} from 'react-icons/bi'
import { BiSearch} from 'react-icons/bi'
import Conversation from './Conversation'
import Menuitem from './Menuitem'
import Profile from './Profile'
const Menu = () => {
  return (
    <div>
        <div className="header">
      <header style={{backgroundColor:'#e6e6e6',
                       width:'100%',
                        height:'4rem',
                        display:'flex',
                        alignItems:'center',
                         justifyContent: 'flex-end',
                         fontSize:'20px',
                         color: 'black'
                          }}>
         <Profile/>
      <BiMessageAltDetail style={{margin:'15px' }} />
      <Menuitem/>
      </header>
      </div>
      <div className="searchbar" style={{
                                     backgroundColor:'#f2f2f2' ,
                                     display:'flex',
                                     alignItems:'center'
                               
                                       }}>


         <BiSearch style={{color:'black'}}/>
         
        <input type="search" placeholder='seach for the message ' className='menuinput'/>
      </div>
      <div className="conversation">
        <Conversation/>
      </div>
      
    </div>
  )
}

export default Menu
