   
import { useState } from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'

const Menuitem = ()=> {

    const [data, setdata] = useState(false);

const handlemenu =()=>{
setdata(!data)
}

    return(
        <div>
<BiDotsVerticalRounded onClick={handlemenu}/>
<div className={data? 'dot' : 'threedot'}>

<ul style={{listStyle:'none'
        }}>
    <li style={{cursor:'pointer'} }>profile</li>
    <li style={{cursor:'pointer'}}>my account</li>
    <li style={{cursor:'pointer'}}>logout</li>
</ul>
</div>
        </div>
    )
}

export default Menuitem;