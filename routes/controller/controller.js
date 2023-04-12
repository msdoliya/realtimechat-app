import usermodal from "../../database/modal/user.js"

   
   export const adduser =  async(req, res) =>{
      try{
 
  const  exist = await usermodal.findOne({sub: req.body.sub})
  if(exist){
   res.status(200).json({message: 'user already exist'})
  return;
}
  
  const newuser = new usermodal(req.body);
   await newuser.save();
    res.status(200).json(newuser);
   } catch(error){
    return res.status(500).json({message:error.message})
      }
    
   }

   export const getuser = async(req, res)=>{
      try{


       const people =   await usermodal.find({})
       res.status(200).json(people)

      } catch(error){
         res.status(500).json({message:error.message})
      }

   }