import React, {  useContext, useEffect, useState } from 'react'
import { getpeople } from '../../service/api'
import { Accountcontext } from '../context/Accountprovider';
import Conversationone from './Conversationone';

const Conversation = () => {

 const {socket, accounts, setactiveusers} = useContext(Accountcontext)

    const [data, setdada] = useState([]);
   
    const fetchdata = async()=>{
      let response = await getpeople();
      setdada(response.data)
    } ;

    useEffect(()=>{
      fetchdata();
    },[]);

   useEffect(()=>{
  socket.current.emit('addusers', accounts )
  socket.current.on('getusers', users=>{
   
   setactiveusers(users);
   console.log(users)

  })
   },[accounts, setactiveusers]) 

  return (

   
    <div>
   
   <div>
    {
      data.map(user=>(
        <Conversationone user ={user}/>
      ))
    }
   </div>
    </div>
  )
}

export default Conversation
