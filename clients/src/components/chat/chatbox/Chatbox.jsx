import { useContext, useEffect, useState } from "react";
import { Accountcontext } from "../../context/Accountprovider";
import Chatheader from "./Chatheader";
import Chatmessege from "./Chatmessege";
import { getconversation} from '../../../service/api'
   



const Chatbox =()=>{

const {person, accounts} = useContext(Accountcontext)
 const [conversation, setconversation] = useState({});

useEffect(() =>{
    const getconversationDetails = async () =>{
       let data =   await getconversation({senderId: accounts.sub, receiverId: person.sub})
      setconversation(data)
        }
   getconversationDetails();
}, [person.sub])
    return(
        <div>
            <Chatheader person ={person}/>
            <Chatmessege  person ={person}  conversation={conversation}/>
          
        </div>
    )
}

export default Chatbox;