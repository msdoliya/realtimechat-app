import  axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async(data)=>{
    try{
       await axios.post(`${URL}/add`, data);
        
    } catch(error) {
   console.log('error while adduser api',error)
}
}

export const getpeople = async()=>{
   try{
    return await axios.get(`${URL}/get`);
   } catch(error) {
  console.log('error while getpeople api api',error)
}
}

export const setconversation = async(data)=>{
   try{
   await axios.post(`${URL}/conversation/add`, data)
   } catch(error){
      console.log('error whle calling setconevrsation api', error.message)
   }
}


export const getconversation = async(data)=>{
   try{
    let response=  await axios.post(`${URL}/conversation/get`, data)
  return response.data
   } catch(error){
      console.log('error whle calling getconevrsation api', error.message)
   }
}

export const  newMessage = async(data)=>{
   try{
await axios.post(`${URL}/message/add`, data )
   } catch(error){
      console.log('error while new message api', error)
   }
}

export const getMessages =async(id)=>{
   try{
    let response = await axios.get(`${URL}/message/get/${id}`)
    return response.data
  
   } catch(error){
      console.log('eroor while handling getmessages api')
   }
}

export const uploadfile = async(data) =>{
try{
      await axios.post(`${URL}/upload/file`, data)
}catch(error){
console.log('error while handling uploadfile api')

}
}