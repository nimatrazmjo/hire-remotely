import mongoose from 'mongoose';
import { dbConfig, db_uri } from '../config/db.config';


async function mongo_connect(uri = db_uri.MONGO_URL) {
  await mongoose.connect(uri);
}

async function mongo_disconnect() {
  await mongoose.disconnect();
}

mongoose.connection.on('connected', () => {
  console.log('connected to database', dbConfig.DATABASE);
});
mongoose.connection.on('connecting', () => {
  console.log('connecting to database');
});
mongoose.connection.on('disconnected', () => {
  console.log('disconnected the database');
});

mongoose.connection.on('error', (error) => {
  console.error('database error', error);
});


export { mongo_connect, mongo_disconnect };