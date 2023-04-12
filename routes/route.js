import express from 'express';
import { adduser, getuser } from './controller/controller.js';
import { getconversation, newconversation } from './controller/conversationcontroller.js';
import { newmessages, getmessages,} from './controller/messagecontroller.js';

const route = express.Router();

route.post('/add', adduser)
route.get('/get', getuser )
route.post('/conversation/add', newconversation)
route.post('/conversation/get', getconversation )
route.post('/message/add', newmessages)
route.get('/message/get/:id', getmessages)

export default route