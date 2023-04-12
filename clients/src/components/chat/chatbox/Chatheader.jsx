import React, { useContext } from 'react'
import { Accountcontext } from '../../context/Accountprovider'

const Chatheader = ({person}) => {

const {activeusers} = useContext(Accountcontext)
  return (
    <div>
      <div style={{width:'100%',
                    display:'flex',
                    alignItems:'center',
                    height:'40px',
                    backgroundColor:'#d2e3d3'
                    }}>
                       {person.name}
                       <p style={{
                        margin: '19px 20px 10px 10px',
                        fontSize: '12px',
                        top:'19px',
                        color:'grey'
                       }}> {activeusers?.find(user=> user.sub==person.sub) ? 'online' : 'offline'}</p>
                    </div>
    </div>
  )
}

export default Chatheader
