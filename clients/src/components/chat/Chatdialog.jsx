import React, { useContext } from 'react'
import { Accountcontext } from '../context/Accountprovider'
import Chatbox from './chatbox/Chatbox'
import Emptychat from './Emptychat'
import Menu from './Menu'

const Chatdialog = () => {


const {person} = useContext(Accountcontext)

 

  return (
    <div className='overflowdisplay'>
      <div className="left"
      style={{flex:'1', backgroundColor:'#f2f2f2'}}>
      <Menu/>
      </div>
      <div className="right" style={{ flex:'2',}}>
    

    { Object.keys(person).length ? <Chatbox/> : <Emptychat/>}
      </div>
    </div>
  )
}

export default Chatdialog
