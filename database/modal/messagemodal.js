import mongoose from "mongoose";

const messageschema = new mongoose.Schema({
    conversationId:{
        type: String
    },
    receiverId:{
        type: String
    },
    senderId:{
        type: String
    },
    text:{
        type: String
    },
    type:{
        type: String
    },
    
},
{timestamps: true}
)

const messagemodal = mongoose.model('messages', messageschema);
export default messagemodal;