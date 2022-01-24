import http from 'http';

import { app } from './src/app'
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const start = async () => {
  server.listen(PORT,()=>{
    console.info('api is listening on port', PORT);
  });

}

start()