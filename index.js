import express from 'express';
import bodyParser from 'body-parser';
import  {connection}  from './database/Db.js';
import route from './routes/route.js';


const app = express();

const PORT = 8000;

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
connection();