import React, { useEffect, useState } from 'react'
import{BsEmojiSmile, BsMic} from 'react-icons/bs'
import{AiOutlinePaperClip} from 'react-icons/ai'
import { uploadfile } from '../../../service/api'


const Chatfooter = ({ file, setfile , sendtext , setvalue, value}) => {

 
  useEffect(() =>{
const getimage = async() =>{
  if(file){
    const data = new FormData()
  data.append('name', file.name)
  data.append('file', file);
  console.log(data)
await uploadfile(data)
  }
}
getimage();
}, [file]);

  const onfilechange= (e)=>{
setfile(e.target.files[0]);
setvalue(e.target.files[0].name)
}
 
  return (
    <div className='footer'>
      <div className="emoji">
        <BsEmojiSmile/> 
        <label htmlFor="fileInput">
        <AiOutlinePaperClip  style={{margin: '10px',
                                     fontSize:'30px'
                                     }}/>
        </label>                             

<input onChange={(e)=>onfilechange(e)} id='fileInput' type="file" style={{display:'none'}} />
        </div >
        <div>
            <input onChange={(e)=>setvalue(e.target.value)}
                  onKeyPress={(e)=>sendtext(e)}
                  value = {value}
                   placeholder='type a message ' type="text" className='chatinput'/>
        </div>
      <div className="mic">
        <BsMic/>
      </div>
    </div>
  )
}

export default Chatfooter
