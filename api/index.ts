import http from 'http';
import { connect } from 'mongoose';

import { app } from './src/app'
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const start = async () => {
    await connect(`mongodb://mongo-service:27017/nimat`); 
    console.log('Connected to mongo DB');
  server.listen(PORT,()=>{
    console.info('api is listening on port', PORT);
  });

}

start()