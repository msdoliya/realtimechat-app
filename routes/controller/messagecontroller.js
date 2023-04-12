import conversationmodal from "../../database/modal/convvermodal.js";
import  messagemodal from "../../database/modal/messagemodal.js"



export const newmessages = async(req, res)=>{

    try{
        const newmessage = new messagemodal(req.body);
         await newmessage.save();
         await conversationmodal.findByIdAndUpdate(req.body.conversationId, {messages: req.body.text})
         return res.status(200).json('messages has been sent successfully')
        
    } catch(error) {
        
     return res.status(400).json({message: error})
    }
}

export const getmessages = async( req, res) => {
    try{
    const messages = await messagemodal.find({conversationId: req.params.id})
    return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json(error.message)
    }
}
