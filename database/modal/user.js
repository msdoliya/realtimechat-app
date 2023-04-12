import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss:{
        type: String
    },
    nbf:{
        type: Number
    },
    sub:{
        type: String,
    },
    name:{
        type: String
    },
    picture:{
        type: String
    }
})

  const usermodal = mongoose.model('whuser', userSchema);

  export default usermodal;