
import React from "react";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Accountprovider from "./components/context/Accountprovider";

const App =()=>{
  return(
    <>
     <GoogleOAuthProvider clientId="380142724562-s3gndrd6qpnht91a53easu2q2olp4gph.apps.googleusercontent.com">
     <Accountprovider>
     <Messenger/>
     </Accountprovider>
     </GoogleOAuthProvider>
    
    </>
  )
}

export default App;