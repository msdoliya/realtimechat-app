import React, { useContext, useEffect } from 'react'
import { formatDate } from '../../../utitis/commonutilis'
import { Accountcontext } from '../../context/Accountprovider'
import { useRef } from 'react'

const Chatmessageone = ({meseg, incomingmessage}) => {

  useEffect(()=>{
    scrollref.current?.scrollIntoView({transition:'smooth'})
  }, [meseg, incomingmessage]);

  const scrollref = useRef()
      
     const {accounts} = useContext(Accountcontext)
  return (
<>
{
    accounts.sub===meseg.senderId ? 
<div className=' mymessage'  ref={scrollref} >
    <div className=' chatmessege'>
      <div className="onemessage">
      {meseg.text}
      </div>
      <div className="time">
         {formatDate (meseg.createdAt)}
      </div>
    </div>
    </div>
    :

    <div>
        <div className=' sendermessege' ref={scrollref}>
      <div className="onemessage">
      {meseg.text}
      </div>
      <div className="time">
         {formatDate (meseg.createdAt)}
      </div>
    </div>
    </div>
}
    <div style={{display:'flex'}}>
    
    </div>

    </>
  )
}

export default Chatmessageone
