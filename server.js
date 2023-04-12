import express from 'express';
import bodyParser from 'body-parser';
import  connection  from './database/Db.js';
import route from './routes/route.js';


const app = express();

const PORT =  process.env.PORT || 8000;

const url =  process.env.MONGODB_URI || "mongodb+srv://mahendra:doliya1998@ecommerce.ckwfmja.mongodb.net/?retryWrites=true&w=majority";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(bodyParser.json({extended:true}));
  app.use(bodyParser.urlencoded({extended:true}));
  

app.listen(PORT, ()=>(console.log('sucess fully running servers ')))

app.use('/', route)
connection(url);