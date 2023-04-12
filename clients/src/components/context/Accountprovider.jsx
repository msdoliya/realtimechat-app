import { createContext, useEffect, useState, useRef} from "react";
import  {io} from 'socket.io-client'


export const Accountcontext = createContext(null);


const Accountprovider =  ({children})=>{

    const [accounts, setaccount] = useState();
    const [person, setperson] = useState({})
     const [activeusers, setactiveusers] = useState([])
    const socket = useRef();

    useEffect(()=>{
        socket.current = io('ws://localhost:9000')
    },[])



   return (
    <Accountcontext.Provider value={{
        accounts,
         setaccount,
         person,
         setperson,
         socket,
         activeusers, 
         setactiveusers
         
         }} >
    {children}
    </Accountcontext.Provider>
   )
}


export default Accountprovider;