import React from 'react'
import { useContext } from 'react'
import { setconversation } from '../../service/api'
import { Accountcontext } from '../context/Accountprovider'

const Conversationone = ({user}) => {
    const {setperson, accounts} = useContext(Accountcontext)
    
    const openchat = async()=>{
        setperson(user);
        await setconversation({senderid: accounts.sub, recieverid: user.sub})
     }
  
    return (
    <div className='flist' onClick={openchat}>
       <img src={user.picture} alt=""
       style={{
      width:'40px',
      height:'40px',
      borderRadius:'50%',
      marginRight:'10px'
       }} />
      {user.name}
    </div>
  )
}

export default Conversationone
