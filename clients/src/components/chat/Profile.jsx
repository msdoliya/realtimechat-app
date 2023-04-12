import React, { useContext, useState } from 'react'
import { TbCircleDotted} from 'react-icons/tb'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import selmon from './download.jpg'
import {MdModeEditOutline} from 'react-icons/md'
import { Accountcontext } from '../context/Accountprovider'


const Profile = () => {
const[data, setdata] = useState(false)
    const profilehandle =()=>{
setdata(!data)
    }

    const {accounts} = useContext(Accountcontext);

  return (
    <div style={{display:'flex',  position: 'absolute', justifyContent:'flex-start', left:'0'}}>
      {/* <TbCircleDotted  style ={{ }} onClick={profilehandle}/> */}
      <img src={accounts.picture} alt=""  onClick={profilehandle} style={{width:'30px', height
    :'30px', borderRadius:'50%'}}/>

   <div className={data? 'profile' : 'profilec'}>
   <div className="pheader">
   <AiOutlineArrowLeft className='prfl'/>
   <p className='prfl'>Profile</p>
   </div>
   <div className="pfotu">
    <img src={accounts.picture} alt=""  className='selmon'/>
   </div>
   <div className='narea' >
    <p className="yname"> Your name</p>
    <div className="pname">
      <p>{accounts.name}</p>
      <MdModeEditOutline/>

    </div>
   </div>
   
   <div  className='narea'>
  
    <div className="pname">
      <p>eat sleet! repeat</p>
      <MdModeEditOutline/>

    </div>
   </div>


   </div>
    </div>
  )
}

export default Profile
