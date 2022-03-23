import 'dotenv/config';
const dbConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 27017,
    DATABASE: process.env.DATABASE || 'online-test'
}

const db_uri = {
    MONGO_URL: `mongodb://${dbConfig.DB_HOST}:${dbConfig.DB_PORT}/${dbConfig.DATABASE}`,
    DB_OPTION: {
      useNewUrlParser: true,
      poolSize: 2,
      keepAlive: 300000,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  }
export { db_uri, dbConfig }