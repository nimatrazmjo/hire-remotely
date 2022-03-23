import http from 'http';
import { app } from './src/app'
import { mongo_connect } from './src/services/database-connection';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const start = async () => {
  await mongo_connect();
  server.listen(PORT,()=>{
    console.info('api is listening on port', PORT);
  });
}

start()