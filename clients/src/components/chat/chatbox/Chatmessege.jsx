import React, {useState, useContext, useEffect } from 'react'
import { getMessages, newMessage } from '../../../service/api'
import { Accountcontext } from '../../context/Accountprovider'
import Chatfooter from './Chatfooter'
import Chatmessageone from './Chatmessageone'

const Chatmessege = ({person, conversation}) => {

  const {accounts, socket} = useContext(Accountcontext)
  const [value, setvalue]  = useState('')
  const [messages,setmessages] = useState([])
  const [newmessageflag, setnewmessageflag] = useState(false)
  const [incomingmessage, setincomingmessage] = useState(null)
    const [file , setfile] = useState();

   
  useEffect(()=>{
  const getmessagesDetails = async () =>{
   let data = await getMessages(conversation._id)
    setmessages(data)
  }
  getmessagesDetails();
}, [person._id, conversation._id, newmessageflag])

  

useEffect(()=>{
incomingmessage && conversation?.members?.includes(incomingmessage.senderId) &&
setmessages((prev) => [...prev, incomingmessage])
},[incomingmessage, conversation])


  const sendtext = async(e)=>{
    const code = e.keyCode || e.which
    if(code === 13){
      let message = {
   senderId: accounts.sub,
   receiverId: person.sub,
   conversationId: conversation._id,
   type: 'text',
   text: value

      }

      socket.current.emit('sendmessage', message)
 await newMessage(message)
      setvalue('');
      setnewmessageflag(prev => !prev)
    }
  }


  useEffect(()=>{
    socket.current.on('getmessage', data =>{
    setincomingmessage({
      ...data,
      createdAt: Date.now()
    
    })
    })
    console.log(incomingmessage)
        },[])
    
  return (
    
    <div >
      <div className='messege'>
        {
          messages && messages.map(meseg =>(
            <Chatmessageone meseg = {meseg}
                            incomingmessage = {incomingmessage}/>
          ))
        }
      </div>

      <Chatfooter sendtext= {sendtext} 
       setvalue={setvalue}
       value = {value}
       file={file}
       setfile={setfile}
       
       />
    </div>
  )
}

export default Chatmessege
