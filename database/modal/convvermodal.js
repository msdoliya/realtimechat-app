

import mongoose from "mongoose";


const conversationschema = new mongoose.Schema({
    members:{
         type: Array
    },
    messages:{
        type: String
    }},
    {
        timestamps: true
    }
    );

    
    const conversationmodal= mongoose.model('baata', conversationschema)

    export default conversationmodal;