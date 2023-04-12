import conversationmodal from "../../database/modal/convvermodal.js";



export const newconversation = async (req, res)=>{
   try{
  const senderId = req.body.senderid;
  const recieverId = req.body.recieverid
 
   const exist = await conversationmodal.findOne({members:{$all:[recieverId, senderId]} });
   if (exist){
    return res.status(200).json('conversation already exist')
}
    const newbata = new conversationmodal({
        members: [senderId, recieverId]
    })
     await newbata.save();

   
} catch(error){

return res.status(500).json(error.message)
   }


}

export const getconversation = async(req, res)=>{
    try{
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId
       
    let conversation =     await conversationmodal.findOne({members: {$all: [receiverId, senderId]}})
   return res.status(200).json(conversation)

} catch(error){
    return res.status(400).json({message: error.message})

    }
}